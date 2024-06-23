import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactSection = () => {
  return (
    <div style={styles.container} id="contact">
      <h2>Contact Us</h2>
      <div style={styles.contactInfo}>
        <div style={styles.infoItem}>
          <MdEmail size={24} />
          <a href="mailto:ap5277478@gmail.com" style={styles.link}>
            ap5277478@gmail.com
          </a>
        </div>
        <div style={styles.infoItem}>
          <MdPhone size={24} />
          <p>+91-7020737478</p>
        </div>
        <div style={styles.infoItem}>
          <MdLocationOn size={24} />
          <p>Maharashtra, India</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "linear-gradient(135deg, #1f2937 0%, #1f2937 100%)",
    textAlign: "center",
    color: "white",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
    color: "black",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "300px",
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    marginLeft: "10px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default ContactSection;
