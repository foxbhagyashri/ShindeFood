import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import admin from "../../assets/Productimg/admin.png";
import { Plus, X, Upload, Package, Croissant, Leaf, LogOut, Shield } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// API Base URL
const API_URL = "http://localhost:5000/api";

function Admin() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);
  
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    productCategory: "",
    description: "",
    points: [""],
    variants: [""],
    logo: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  // Check authentication on mount
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/check`, {
        withCredentials: true
      });

      if (response.data.success && response.data.isAuthenticated) {
        setIsAuthenticated(true);
        setUser(response.data.user);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(response.data.user));
      } else {
        // Not authenticated, redirect to login
        navigate('/login');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      // Clear any stored auth data
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
      // Redirect to login
      navigate('/login');
    } finally {
      setIsCheckingAuth(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, {
        withCredentials: true
      });

      // Clear local storage
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');

      toast.success('Logged out successfully', {
        icon: '👋',
        duration: 2000
      });

      // Redirect to login page
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed');
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/products`);
      if (res.data && res.data.success) {
        setProductsList(res.data.data || []);
      } else {
        setProductsList([]);
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
      setProductsList([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Available logo options (emojis as shown in your images)
  const logoOptions = [
    { value: "🌮", label: "Taco" },
    { value: "🥟", label: "Dumpling" },
    { value: "🍗", label: "Chicken" },
    { value: "🌶️", label: "Chili" },
    { value: "🍔", label: "Burger" },
    { value: "🍟", label: "Fries" },
    { value: "🍕", label: "Pizza" },
    { value: "🥗", label: "Salad" },
    { value: "🍖", label: "Meat" },
    { value: "🥩", label: "Steak" },
    { value: "🍤", label: "Shrimp" },
    { value: "🐟", label: "Fish" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...formData.points];
    newPoints[index] = value;
    setFormData({ ...formData, points: newPoints });
  };

  const handleVariantChange = (index, value) => {
    const newVariants = [...formData.variants];
    newVariants[index] = value;
    setFormData({ ...formData, variants: newVariants });
  };

  const addVariant = () => {
    setFormData({ ...formData, variants: [...formData.variants, ""] });
  };

  const removeVariant = (index) => {
    const newVariants = formData.variants.filter((_, i) => i !== index);
    setFormData({ ...formData, variants: newVariants });
  };

  const addPoint = () => {
    setFormData({ ...formData, points: [...formData.points, ""] });
  };

  const removePoint = (index) => {
    const newPoints = formData.points.filter((_, i) => i !== index);
    setFormData({ ...formData, points: newPoints });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.productCategory) {
      toast.error('Please select a Product Category', {
        icon: '⚠️',
        duration: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare data for backend (excluding image)
      const productData = {
        productName: formData.productName,
        productType: formData.productType,
        productCategory: formData.productCategory,
        logo: formData.logo,
        description: formData.description,
        points: formData.points.filter(point => point.trim() !== ''),
        variants: formData.variants.filter(v => v.trim() !== '')
      };

      // If editing, call PUT
      if (editingId) {
        const response = await axios.put(`${API_URL}/products/${editingId}`, productData, {
          withCredentials: true
        });
        if (response.data.success) {
          toast.success(`Product updated successfully!`, {
            icon: '✅',
            duration: 4000,
            style: {
              borderRadius: '10px',
              background: '#10B981',
              color: '#fff',
            },
          });
          setEditingId(null);
          fetchProducts();
          // Scroll to products list
          setTimeout(() => {
            document.getElementById('products-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      } else {
        // Send to backend API using Axios
        const response = await axios.post(`${API_URL}/products`, productData, {
          withCredentials: true
        });

        if (response.data.success) {
          toast.success(
            <div>
              <div className="font-bold">Product added successfully!</div>
              <div className="text-sm">📦 {response.data.product.productName}</div>
              <div className="text-sm">🏷️ {productData.productCategory}</div>
            </div>,
            {
              icon: '✅',
              duration: 4000,
              style: {
                borderRadius: '10px',
                background: '#10B981',
                color: '#fff',
              },
            }
          );
          // Reset form
          setFormData({
            productName: "",
            productType: "",
            productCategory: "",
            description: "",
            points: [""],
            variants: [""],
            logo: "",
            image: null,
          });
          setPreviewImage(null);
          fetchProducts();
          // Scroll to products list
          setTimeout(() => {
            document.getElementById('products-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else {
          toast.error(response.data.message || 'Failed to add product', {
            icon: '❌',
            duration: 4000,
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      if (error.response) {
        // Server responded with error
        toast.error(error.response.data.message || 'Failed to process request', {
          icon: '❌',
          duration: 4000,
        });
      } else if (error.request) {
        // No response from server
        toast.error('Cannot connect to server. Please check if backend is running.', {
          icon: '🔌',
          duration: 5000,
        });
      } else {
        // Other errors
        toast.error(error.message || 'An unexpected error occurred', {
          icon: '⚠️',
          duration: 4000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      productName: product.productName || "",
      productType: product.productType || "",
      productCategory: product.productCategory || "",
      description: product.description || "",
      points: Array.isArray(product.points) && product.points.length ? product.points : [""],
      variants: Array.isArray(product.variants) && product.variants.length ? product.variants : [""],
      logo: product.logo || "",
      image: null,
    });
    setPreviewImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    const product = productsList.find(p => p.id === id);
    
    // Show confirmation toast
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <div>
            <div className="font-bold text-gray-900">Delete Product?</div>
            <div className="text-sm text-gray-600 mt-1">
              {product?.productName}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                try {
                  const res = await axios.delete(`${API_URL}/products/${id}`, {
                    withCredentials: true
                  });
                  if (res.data && res.data.success) {
                    toast.success(
                      <div>
                        <div className="font-bold">Product deleted!</div>
                        <div className="text-sm">🗑️ {product?.productName}</div>
                      </div>,
                      {
                        icon: '✅',
                        duration: 3000,
                        style: {
                          borderRadius: '10px',
                          background: '#10B981',
                          color: '#fff',
                        },
                      }
                    );
                    fetchProducts();
                  } else {
                    toast.error('Failed to delete product', {
                      icon: '❌',
                      duration: 3000,
                    });
                  }
                } catch (err) {
                  console.error('Delete error', err);
                  toast.error('Error deleting product', {
                    icon: '❌',
                    duration: 3000,
                  });
                }
              }}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 10000,
        style: {
          minWidth: '300px',
        },
      }
    );
  };

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FDF2F2] via-white to-[#FBE5E5] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#8B1B1F] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render (will redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Toaster 
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#FDF2F2] via-white to-[#FBE5E5] pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logout */}
        <div className="flex justify-between items-center mb-8 mt-10">
          <div className="text-center flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#8B1B1F] mb-2">
              Admin Dashboard
            </h1>
            {user && (
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Welcome, <span className="font-semibold">{user.username}</span>
              </p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors shadow-lg"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-25 mt-10">
          {/* LEFT SECTION - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
             <p className="text-gray-600 text-2xl text-center mb-8">Add New Food Product</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="e.g., Premium Chicken Wings"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1B1F] focus:border-[#8B1B1F] transition-all"
                />
              </div>

              {/* Product Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Product Type *
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1B1F] focus:border-[#8B1B1F] transition-all"
                >
                  <option value="">Select Product Type</option>
                  <option value="Frozen Food">Frozen Food</option>
                  <option value="Fresh Food">Fresh Food</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Meat Products">Meat Products</option>
                  <option value="Seafood">Seafood</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Ready to Eat">Ready to Eat</option>
                </select>
              </div>

              {/* Product Category Buttons */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Product Category *
                </label>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, productCategory: "Frozen Snacks" })}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all border-2 ${
                      formData.productCategory === "Frozen Snacks"
                        ? "bg-[#8B1B1F] text-white border-[#8B1B1F] shadow-lg"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#8B1B1F] hover:text-[#8B1B1F]"
                    }`}
                  >
                    <Package size={18} />
                    Frozen Snacks
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, productCategory: "Frozen Breads" })}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all border-2 ${
                      formData.productCategory === "Frozen Breads"
                        ? "bg-[#8B1B1F] text-white border-[#8B1B1F] shadow-lg"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#8B1B1F] hover:text-[#8B1B1F]"
                    }`}
                  >
                    <Croissant size={18} />
                    Frozen Breads
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, productCategory: "Frozen Vegetables" })}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all border-2 ${
                      formData.productCategory === "Frozen Vegetables"
                        ? "bg-[#8B1B1F] text-white border-[#8B1B1F] shadow-lg"
                        : "bg-white text-gray-700 border-gray-300 hover:border-[#8B1B1F] hover:text-[#8B1B1F]"
                    }`}
                  >
                    <Leaf size={18} />
                    Frozen Vegetables
                  </button>
                </div>
              </div>

              {/* Product Logo Dropdown */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Product Logo *
                </label>
                <select
                  name="logo"
                  value={formData.logo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1B1F] focus:border-[#8B1B1F] transition-all text-2xl"
                >
                  <option value="">Select Logo</option>
                  {logoOptions.map((logo) => (
                    <option key={logo.value} value={logo.value}>
                      {logo.value} {logo.label}
                    </option>
                  ))}
                </select>
                {formData.logo && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-gray-600">Selected:</span>
                    <span className="text-4xl">{formData.logo}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Write detailed product description..."
                  required
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1B1F] focus:border-[#8B1B1F] transition-all resize-none"
                />
              </div>

              {/* Product Points */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Product Features/Points *
                </label>
                <div className="space-y-3">
                  {formData.points.map((point, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={point}
                        onChange={(e) => handlePointChange(index, e.target.value)}
                        placeholder={`Point ${index + 1}`}
                        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1B1F] focus:border-[#8B1B1F] transition-all"
                      />
                      {formData.points.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removePoint(index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addPoint}
                    className="flex items-center gap-2 px-4 py-2 bg-[#8B1B1F] text-white rounded-lg hover:bg-[#6B1519] transition-colors"
                  >
                    <Plus size={20} />
                    Add Point
                  </button>
                </div>
              </div>

              {/* Product Variants */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Product Variants
                </label>
                <div className="space-y-3">
                  {formData.variants.map((variant, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={variant}
                        onChange={(e) => handleVariantChange(index, e.target.value)}
                        placeholder={`Variant ${index + 1} (e.g., Classic, Large, Premium)`}
                        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1B1F] focus:border-[#8B1B1F] transition-all"
                      />
                      {formData.variants.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addVariant}
                    className="flex items-center gap-2 px-4 py-2 bg-[#8B1B1F] text-white rounded-lg hover:bg-[#6B1519] transition-colors"
                  >
                    <Plus size={20} />
                    Add Variant
                  </button>
                </div>
              </div>

              

              {/* Submit Button */}
              <div className="flex gap-3">
                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setFormData({
                        productName: "",
                        productType: "",
                        productCategory: "",
                        description: "",
                        points: [""],
                        variants: [""],
                        logo: "",
                        image: null,
                      });
                      setPreviewImage(null);
                      toast('Editing cancelled', {
                        icon: 'ℹ️',
                        duration: 2000,
                      });
                    }}
                    className="flex-1 py-4 rounded-lg font-bold text-lg transition-all duration-300 bg-gray-300 hover:bg-gray-400 text-gray-800"
                  >
                    ❌ Cancel
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className={`${editingId ? 'flex-1' : 'w-full'} py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : editingId 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      : 'bg-[#8B1B1F] hover:bg-[#6B1519] text-white'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {editingId ? 'Updating Product...' : 'Adding Product...'}
                    </>
                  ) : (
                    editingId ? '✏️ Update Product' : '➕ Add Product'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SECTION - Preview */}
          <div className=" p-6 sm:p-8 flex items-center justify-center">
            {/* Image Preview Only */}
           
              <img
                src={admin}
                alt="Upload Product Image"
                className="w-full h-auto max-h-[700px] object-contain rounded-lg "
              />
            
          </div>
        </div>

        {/* Admin Products List */}
        <div className="mt-12" id="products-list">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Existing Products ({productsList.length})</h2>
            
            {/* Category Filter Dropdown */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-gray-700">Filter by Category:</label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B1B1F] focus:border-[#8B1B1F] font-semibold text-sm"
              >
                <option value="all">All Categories</option>
                <option value="Frozen Snacks">🥟 Frozen Snacks</option>
                <option value="Frozen Breads">🥖 Frozen Breads</option>
                <option value="Frozen Vegetables">🥬 Frozen Vegetables</option>
              </select>
            </div>
          </div>

          {/* Category Sections */}
          {['Frozen Snacks', 'Frozen Breads', 'Frozen Vegetables'].map(category => {
            const categoryProducts = productsList.filter(p => 
              (filterCategory === 'all' || filterCategory === category) && p.productCategory === category
            );
            
            if (categoryProducts.length === 0) return null;
            
            return (
              <div key={category} className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  {category === 'Frozen Snacks' && <Package className="w-6 h-6 text-[#8B1B1F]" />}
                  {category === 'Frozen Breads' && <Croissant className="w-6 h-6 text-[#8B1B1F]" />}
                  {category === 'Frozen Vegetables' && <Leaf className="w-6 h-6 text-[#8B1B1F]" />}
                  <h3 className="text-xl font-bold text-gray-800">{category} ({categoryProducts.length})</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {categoryProducts.map((p) => (
                    <div key={p.id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#8B1B1F]">
                      <div className="flex flex-col h-full">
                        {/* Product Header */}
                        <div className="flex justify-between items-start mb-3">
                          <div className="text-5xl">{p.logo}</div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleEdit(p)} 
                              className="px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-xs font-bold transition-colors"
                            >
                              ✏️ Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(p.id)} 
                              className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-colors"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </div>
                        
                        {/* Product Info */}
                        <h3 className="font-black text-lg text-gray-900 mb-2">{p.productName}</h3>
                        
                        {/* Category Badge */}
                        <div className="mb-3">
                          <span className="bg-[#8B1B1F] text-white px-3 py-1 rounded-lg text-xs font-bold">
                            {p.productCategory}
                          </span>
                        </div>
                        
                        {/* Variants */}
                        {(p.variants || []).length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {(p.variants || []).map((v, i) => (
                              <span key={i} className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold">{v}</span>
                            ))}
                          </div>
                        )}
                        
                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{p.description}</p>
                        
                        {/* Points */}
                        <div className="mt-auto space-y-2">
                          {(p.points || []).slice(0, 3).map((pt, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full border-2 border-[#8B1B1F] flex items-center justify-center mt-0.5 flex-shrink-0">
                                <FontAwesomeIcon icon={faCheckCircle} className="w-2.5 h-2.5 text-[#8B1B1F]" />
                              </div>
                              <span className="text-xs text-gray-700 leading-tight">{pt}</span>
                            </div>
                          ))}
                          {(p.points || []).length > 3 && (
                            <p className="text-xs text-gray-500 italic">+{(p.points || []).length - 3} more...</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          
          {/* Empty State */}
          {productsList.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-semibold">No products yet</p>
              <p className="text-gray-400 text-sm mt-2">Add your first product using the form above</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default Admin;
