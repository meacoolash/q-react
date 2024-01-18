import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectContactById } from "./contactsApiSlice";

const Contact = ({ contactId }) => {
  const contact = useSelector((state) => selectContactById(state, contactId));

  const navigate = useNavigate();

  if (contact) {
    const handleEdit = () => navigate(`/dash/contacts/${contactId}`);
    return (
      <div style={{ display: "flex", gap: "3rem" }}>
        <span>{contact.name}</span>
        <span>{contact.email}</span>
        <button onClick={handleEdit}>edit</button>
      </div>
    );
  } else return null;
};
export default Contact;
