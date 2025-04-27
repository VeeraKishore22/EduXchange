import { useNavigate } from "react-router-dom";
import "../App.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const formData = {
    cardNumber: "123456789012",
    expiryDate: "03/29",
    cvv: "222",
    cardHolder: "USER",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
    navigate("/Home");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Payment Page</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="cardNumber"
            className="payment-input"
            value={formData.cardNumber}
            readOnly
          />
        </div>
        <div>
          <input
            type="text"
            name="expiryDate"
            className="payment-input"
            value={formData.expiryDate}
            readOnly
          />
        </div>
        <div>
          <input
            type="password"
            name="cvv"
            className="payment-input"
            value={formData.cvv}
            readOnly
          />
        </div>
        <div>
          <input
            type="text"
            name="cardHolder"
            className="payment-input"
            value={formData.cardHolder}
            readOnly
          />
        </div>
        <button type="submit" className="payment-button">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
