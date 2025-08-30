import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

// ✅ Yup validation schema
const productSchema = Yup.object().shape({
  name: Yup.string().required("Product Name is required"),
  description: Yup.string().required("Description is required"),
  metaTitle: Yup.string().required("Meta Tag Title is required"),
  metaDescription: Yup.string().required("Meta Tag Description is required"),
  metaKeywords: Yup.string().required("Meta Tag Keywords are required"),
  price: Yup.number().required("Price is required").positive(),
  specialPrice: Yup.number()
    .nullable()
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  quantity: Yup.number().required("Quantity is required").min(1),
  status: Yup.string().required("Status is required"),
  mainImage: Yup.mixed().required("Main Image is required"),
  subImages: Yup.array()
    .of(Yup.mixed())
    .min(1, "At least one sub image required"),
});

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    price: "",
    specialPrice: "",
    quantity: "",
    status: "",
    mainImage: null,
    subImages: [],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
    formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "list",
      "bullet",
      "link",
      "image",
    ],
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        setFormData((prev) => ({ ...prev, description: html }));
        setErrors((prev) => ({ ...prev, description: undefined }));
      });
    }
  }, [quill]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
    if (name === "mainImage") {
      setFormData({ ...formData, mainImage: files[0] });
    } else if (name === "subImages") {
      setFormData({
        ...formData,
        subImages: [...formData.subImages, ...Array.from(files)],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productSchema.validate(formData, { abortEarly: false });
      setErrors({});
      console.log("✅ Product Data Submitted:", formData);
      const existing = JSON.parse(localStorage.getItem("products")) || [];
      localStorage.setItem("products", JSON.stringify([...existing, formData]));
      setFormData({
        name: "",
        description: "",
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
        price: "",
        specialPrice: "",
        quantity: "",
        status: "",
        mainImage: null,
        subImages: [],
      });
      if (quill) quill.setContents([]);
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <button
          onClick={() => navigate("/admin/products")}
          className="bg-[#003b19] text-white px-4 py-2 rounded"
        >
          All Products
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <Tabs.Root defaultValue="general">
          <Tabs.List className="flex border-b overflow-x-auto">
            {["General", "Data", "Image"].map((tab) => (
              <Tabs.Trigger
                key={tab}
                value={tab.toLowerCase()}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#003b19] data-[state=active]:border-b-2 data-[state=active]:border-[#003b19] data-[state=active]:text-[#003b19] data-[state=active]:font-bold "
              >
                {tab}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content value="general" className="p-4">
            <label className="block font-medium">
              Product Name <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <label className="block font-medium mt-3">
              Description <strong className="text-red-500">*</strong>
            </label>

            <div
              ref={quillRef}
              className={`bg-white rounded min-h-[150px] p-2 ${
                errors.description
                  ? "border border-red-500"
                  : "border border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}

            <label className="block font-medium mt-3">
              Meta Tag Title <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.metaTitle ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.metaTitle && (
              <p className="text-red-500 text-sm">{errors.metaTitle}</p>
            )}

            <label className="block font-medium mt-3">
              Meta Tag Description <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.metaDescription ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.metaDescription && (
              <p className="text-red-500 text-sm">{errors.metaDescription}</p>
            )}

            <label className="block font-medium mt-3">
              Meta Tag Keywords <strong className="text-red-500">*</strong>
            </label>
            <input
              type="text"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.metaKeywords ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.metaKeywords && (
              <p className="text-red-500 text-sm">{errors.metaKeywords}</p>
            )}
          </Tabs.Content>

          {/* Data Tab */}
          <Tabs.Content value="data" className="p-4">
            <label className="block font-medium">
              Main Price <strong className="text-red-500">*</strong>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.price ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price}</p>
            )}

            <label className="block font-medium mt-3">Special Price </label>
            <input
              type="number"
              name="specialPrice"
              value={formData.specialPrice}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.specialPrice ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.specialPrice && (
              <p className="text-red-500 text-sm">{errors.specialPrice}</p>
            )}

            <label className="block font-medium mt-3">
              Quantity <strong className="text-red-500">*</strong>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.quantity ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity}</p>
            )}

            <label className="block font-medium mt-3">
              Status <strong className="text-red-500">*</strong>
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.status ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">-- Select Status --</option>
              <option value="Available">Available</option>
              <option value="Out of stock">Out of stock</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status}</p>
            )}
          </Tabs.Content>

          {/* Image Tab */}
          <Tabs.Content value="image" className="p-4">
            <label className="block font-medium">
              Main Image <strong className="text-red-500">*</strong>
            </label>
            <input
              type="file"
              name="mainImage"
              onChange={handleChange}
              className={`border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.mainImage ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.mainImage && (
              <p className="text-red-500 text-sm">{errors.mainImage}</p>
            )}

            <label className="block font-medium mt-3">
              Sub Images <strong className="text-red-500">*</strong>
            </label>
            <input
              type="file"
              name="subImages"
              multiple
              onChange={handleChange}
              className={` border w-full p-2 rounded mb-1 focus:outline-none ${
                errors.subImages ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.subImages && (
              <p className="text-red-500 text-sm">{errors.subImages}</p>
            )}

            {/* Preview thumbnails */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {formData.subImages.map((file, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(file)}
                  alt={`sub-${i}`}
                  className="w-20 h-20 object-cover rounded"
                />
              ))}
            </div>
          </Tabs.Content>
        </Tabs.Root>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => setFormData({})}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#003b19] text-white px-6 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
