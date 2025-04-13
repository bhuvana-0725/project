import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    otp: "",
    newPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [resetOtpSent, setResetOtpSent] = useState(false);
  const [resetOtp, setResetOtp] = useState(null);
  const [resetOtpVerified, setResetOtpVerified] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const [signupOtpSent, setSignupOtpSent] = useState(false);
  const [signupOtpVerified, setSignupOtpVerified] = useState(false);
  const [signupOtp, setSignupOtp] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!isLogin && !formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.password.trim())
      newErrors.password = "Password is required.";
    if (!isLogin && !agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms and conditions.";
    if (!isLogin && !signupOtpVerified)
      newErrors.otp = "OTP verification is required for signup.";
    if (isForgotPassword && resetOtpVerified && !formData.newPassword.trim())
      newErrors.newPassword = "New Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendResetOTP = () => {
    if (!formData.phone.match(/^\d{10}$/)) {
      setErrors({ phone: "Enter a valid 10-digit phone number." });
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setResetOtp(otp);
    setResetOtpSent(true);
    alert(`Reset OTP sent: ${otp}`);
  };

  const verifyResetOTP = () => {
    if (formData.otp === resetOtp) {
      alert("Reset OTP verified!");
      setResetOtpVerified(true);
      setErrors({});
    } else {
      setErrors({ otp: "Invalid OTP. Try again." });
    }
  };

  const handleResetPassword = () => {
    if (!formData.newPassword.trim()) {
      setErrors({ newPassword: "New Password is required." });
      return;
    }
    alert("Password reset successful! Redirecting to login...");
    setIsForgotPassword(false);
    setIsLogin(true);
    setResetOtpVerified(false);
  };

  const sendSignupOTP = () => {
    if (!formData.phone.match(/^\d{10}$/)) {
      setErrors({ phone: "Enter a valid 10-digit phone number." });
      return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setSignupOtp(otp);
    setSignupOtpSent(true);
    alert(`Signup OTP sent: ${otp}`);
  };

  const verifySignupOTP = () => {
    if (formData.otp === signupOtp) {
      alert("Signup OTP verified!");
      setSignupOtpVerified(true);
      setErrors({});
    } else {
      setErrors({ otp: "Invalid OTP. Try again." });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isLogin) {
      alert("Login successful! Redirecting...");
      navigate("/home");
    } else {
      alert("Sign-up successful! Redirecting to login...");
      setIsLogin(true);
      setSignupOtpVerified(false);
      setSignupOtpSent(false);
    }
  };

  return (
    <div className="absolute inset-0 min-h-screen flex overflow-hidden bg-gradient-to-r from-pink-100 via-yellow-50 to-green-100">
      <div className="w-1/2 flex flex-col justify-center items-center text-black p-10 text-center">
        <h1 className="text-4xl font-bold">Lost something? Let's Find It Together!</h1>
        <p className="mt-4 text-lg font-semibold">Sign up or log in to search our community-based lost & found board.</p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
          <p className="text-sm text-gray-600 text-center">Enter your details below</p>
          <h2 className="text-3xl font-bold text-center">
            {isForgotPassword ? "Reset Password" : isLogin ? "Login" : "Sign Up"}
          </h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {isForgotPassword ? (
              <>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                {!resetOtpSent && (
                  <button
                    type="button"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2"
                    onClick={sendResetOTP}
                  >
                    Send Reset OTP
                  </button>
                )}
                {resetOtpSent && (
                  <>
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter Reset OTP"
                      className="w-full p-3 border rounded-lg"
                      value={formData.otp}
                      onChange={handleChange}
                    />
                    {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
                    <button
                      type="button"
                      className="w-full bg-green-600 text-white py-2 rounded-lg mt-2"
                      onClick={verifyResetOTP}
                    >
                      Verify Reset OTP
                    </button>
                    {resetOtpVerified && (
                      <>
                        <input
                          type="password"
                          name="newPassword"
                          placeholder="New Password"
                          className="w-full p-3 border rounded-lg mt-2"
                          value={formData.newPassword}
                          onChange={handleChange}
                        />
                        {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword}</p>}
                        <button
                          type="button"
                          className="w-full bg-green-600 text-white py-2 rounded-lg mt-2"
                          onClick={handleResetPassword}
                        >
                          Reset Password
                        </button>
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {!isLogin && (
                  <>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="w-full p-3 border rounded-lg"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </>
                )}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                {!isLogin && (
                  <>
                    {!signupOtpSent ? (
                      <button
                        type="button"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg"
                        onClick={sendSignupOTP}
                      >
                        Send OTP
                      </button>
                    ) : !signupOtpVerified ? (
                      <>
                        <input
                          type="text"
                          name="otp"
                          placeholder="Enter OTP"
                          className="w-full p-3 border rounded-lg"
                          value={formData.otp}
                          onChange={handleChange}
                        />
                        {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
                        <button
                          type="button"
                          className="w-full bg-green-600 text-white py-2 rounded-lg"
                          onClick={verifySignupOTP}
                        >
                          Verify OTP
                        </button>
                      </>
                    ) : null}

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                      />
                      <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                        I agree to the{" "}
                        <span
                          className="text-blue-600 cursor-pointer underline"
                          onClick={() => setShowTermsModal(true)}
                        >
                          terms and conditions
                        </span>
                      </label>
                    </div>
                    {errors.agreeTerms && (
                      <p className="text-red-500 text-sm">{errors.agreeTerms}</p>
                    )}
                  </>
                )}

                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
                  {isLogin ? "Login" : "Sign Up"}
                </button>
                {isLogin && (
                  <p
                    className="text-blue-500 cursor-pointer text-center mt-2"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Forgot Password?
                  </p>
                )}
              </>
            )}
          </form>
          <div className="mt-4 text-center text-sm">
            {isForgotPassword ? (
              <span className="text-blue-500 cursor-pointer" onClick={() => setIsForgotPassword(false)}>
                Back to Login
              </span>
            ) : (
              <>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span className="text-blue-500 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Sign Up" : "Login"}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full relative max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <div className="text-sm text-gray-700 space-y-4">
              <p>
                Welcome to <strong>FindMyStuff.com</strong>! These Terms and Conditions outline the rules and regulations for the use of our website.
              </p>
              <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use FindMyStuff.com if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              <h3 className="font-semibold mt-4">1. Purpose</h3>
              <p>
                This website is a community-driven platform designed to help users report and locate lost or found items. All users must use this platform responsibly and in accordance with applicable laws.
              </p>
              <h3 className="font-semibold mt-4">2. User Conduct</h3>
              <ul className="list-disc list-inside ml-4">
                <li>You agree to provide accurate information when posting about lost or found items.</li>
                <li>You must not post false or misleading information.</li>
                <li>Spamming, fraudulent activity, or impersonation is strictly prohibited.</li>
              </ul>
              <h3 className="font-semibold mt-4">3. Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account information and password. Any activity occurring under your account is your responsibility.
              </p>
              <h3 className="font-semibold mt-4">4. Limitation of Liability</h3>
              <p>
                FindMyStuff.com is not responsible for the return of any item. We simply provide a platform to facilitate connections. We do not guarantee recovery of any lost items.
              </p>
              <h3 className="font-semibold mt-4">5. Privacy Policy</h3>
              <p>
                We are committed to protecting your privacy. We will never sell or misuse your personal information. All details are handled according to our Privacy Policy.
              </p>
              <h3 className="font-semibold mt-4">6. Changes to Terms</h3>
              <p>
                We reserve the right to revise these terms at any time. By continuing to use the platform, you agree to be bound by the updated terms.
              </p>
              <p className="mt-4">
                If you have any questions, contact <a href="mailto:support@findmystuff.com" className="text-blue-600 underline">support@findmystuff.com</a>.
              </p>
            </div>
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setShowTermsModal(false)}
            >
              ×
            </button>
            <button
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
              onClick={() => setShowTermsModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}




