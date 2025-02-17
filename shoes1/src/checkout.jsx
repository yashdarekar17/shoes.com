


const Checkout = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Buy Now function
  const buyNow = async (productId) => {
    try {
      const response = await fetch("http://localhost:8000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const { order, product } = await response.json();

      const options = {
        key: "rzp_live_6LpDZfFVVBQ2RS", // Replace with Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: "E-commerce Checkout",
        description: `Buying ${product.name}`,
        order_id: order.id, // Order ID from Razorpay
        handler: async (response) => {
          try {
            const verifyResponse = await fetch(
              "http://localhost:5000/verify-payment",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              }
            );

            const result = await verifyResponse.json();

            if (result.status === "Payment verified successfully") {
              alert("Payment Successful!");
            } else {
              alert("Payment Verification Failed!");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            alert("Error verifying payment.");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: { color: "#F37254" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Error processing payment.");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">Price: ₹{product.price}</p>
            <button
              onClick={() => buyNow(product.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
