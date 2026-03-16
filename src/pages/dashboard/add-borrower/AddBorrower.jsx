import { Link } from "react-router";

const AddBorrower = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold text-white">Add Borrower</h1>

      <Link to="/dashboard">
        <button className="bg-brand-blue hover:bg-brand-blue/80 rounded-md px-4 py-2 text-white">
          Back to Dashboard
        </button>
      </Link>
    </main>
  );
};

export default AddBorrower;
