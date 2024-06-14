import React, { useState } from "react";
import axios from "axios"; // Import axios
import "./Form.css";
import BLUE from "../../assets/BLUE.png";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const industries = [
  // ... (the same industries array as provided)
  "Accounting",
  "Airlines/Aviation",
  "Alternative Dispute Resolution",
  "Alternative Medicine",
  "Animation",
  "Apparel/fashion",
  "Architecture/Planning",
  "Arts/Crafts",
  "Automotive",
  "Aviation/Aerospace",
  "Banking/Mortgage",
  "Biotechnology/Greentech",
  "Broadcast Media",
  "Building Materials",
  "Business Supplies/Equipment",
  "Capital Markets/Hedge Fund/Private Equity",
  "Chemicals",
  "Civic/Social Organisation",
  "Civil Engineering",
  "Commercial Real Estate",
  "Computer Games",
  "Computer Hardware",
  "Computer Networking",
  "Computer Software/Engineering",
  "Computer/Network Security",
  "Construction",
  "Consumer Electronics",
  "Consumer Goods",
  "Consumer Services",
  "Cosmetics",
  "Dairy",
  "Defense/Space",
  "Design",
  "E-Learning",
  "Education Management",
  "Electrical/Electronic Manufacturing",
  "Entertainment/Movie Production",
  "Environmental Services",
  "Event Services",
  "Executive Office",
  "Facilities Services",
  "Farming",
  "Financial Services",
  "Fishery",
  "Food Production",
  "Food/Beverages",
  "Fundraising",
  "Furniture",
  "Gambling/Casinos",
  "Glass/Ceramics/Concrete",
  "Government Administration",
  "Government Relations",
  "Graphic Design/Web Design",
  "Health/Fitness",
  "Higher Education/Academia",
  "Hospital/Health Care",
  "Hospitality",
  "Human Resources/HR",
  "Import/Export",
  "Individual/Family Services",
  "Industrial Automation",
  "Information Services",
  "Information Technology/IT",
  "Insurance",
  "International Affairs",
  "International Trade/Development",
  "Internet",
  "Investment Banking/Venture",
  "Investment Management/Hedge Fund/Private Equity",
  "Judiciary",
  "Law Enforcement",
  "Law Practice/Law Firms",
  "Legal Services",
  "Legislative Office",
  "Leisure/Travel",
  "Library",
  "Logistics/Procurement",
  "Luxury Goods/Jewelry",
  "Machinery",
  "Management Consulting",
  "Maritime",
  "Market Research",
  "Marketing/Advertising/Sales",
  "Mechanical or Industrial Engineering",
  "Media Production",
  "Medical Equipment",
  "Medical Practice",
  "Mental Health Care",
  "Military Industry",
  "Mining/Metals",
  "Motion Pictures/Films",
  "Museums/Institutions",
  "Music",
  "Nanotechnology",
  "Newspapers/Journalism",
  "Non-Profit/Volunteering",
  "Oil/Energy/Solar/Greentech",
  "Online Publishing",
  "Other Industry",
  "Outsourcing/Offshoring",
  "Package/Freight Delivery",
  "Packaging/Containers",
  "Paper/Forest Products",
  "Performing Arts",
  "Pharmaceuticals",
  "Philantrophy",
  "Photography",
  "Plastics",
  "Political Organisation",
  "Primary/Secondary Education",
  "Printing",
  "Professional Training",
  "Program Development",
  "Public Relations/PR",
  "Public Safety",
  "Publishing Industry",
  "Railroad Manufacture",
  "Ranching",
  "Real Estate/Mortgage",
  "Recreational Facilities/Services",
  "Religious Institutions",
  "Renewables/Environment",
  "Research Industry",
  "Restaurants",
  "Retail Industry",
  "Security/Investigations",
  "Semiconductors",
  "Shipbuilding",
  "Sporting Goods",
  "Sports",
  "Staffing/Recruiting",
  "Supermarkets",
  "Telecommunication",
  "Textiles",
  "Think Tanks",
  "Tobacco",
  "Translation/Localisation",
  "Transportation",
  "Utilities",
  "Venture Capital/VC",
  "Veterinary",
  "Warehousing",
  "Wholesale",
  "Wine/Spirits",
  "Wireless",
  "Writing/Editing",
];

const Form = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyAddress: "",
    phoneNumber: "",
    industry: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // You can add more validation logic here

    // If validation passes, submit the form data using axios
    axios
      .post(
        "https://datacenter.divinelearninghub.com.ng/api/Data/Register",
        formData
      )
      .then((response) => {
        // Handle successful registration
        console.log("Registration successful:", response.data);
        // Reset form fields
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          companyName: "",
          companyAddress: "",
          phoneNumber: "",
          industry: "",
        });
        setError("");
        alert("Registration successful! Please login."); // Show alert
        navigate("/Signin"); // Redirect to login page
      })
      .catch((error) => {
        // Handle registration error
        console.error("There was an error registering!", error);
        setError("Registration failed. Please try again.");
        alert("Registration failed. Please try again."); // Show alert
      });
  };

  return (
    <div className="bod">
      <div className="company-logo">
        <Link to="/">
          <img src={BLUE} alt="Company Logo" />
        </Link>
      </div>
      <div className="registration-form-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Create Account With Us</h2>
          <div className="form-group">
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-in"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-in"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-in"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-in"
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="form-in"
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyAddress">Company Address</label>
            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              className="form-in"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="form-in"
            />
          </div>
          <div className="form-group">
            <label htmlFor="industry">Business Type</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">Select Industry</option>
              {industries.map((industry, index) => (
                <option key={index} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign up</button>
          <p>You agree to our terms and conditions</p>
          <br />
          <Link to="/Signin" className="Signin ">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
