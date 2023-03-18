function Footer() {
    return (
      <footer className="bg-black text-white py-4 text-center text-opacity-50">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Vantablacc. All Rights Reserved.
        </p>
      </footer>
    );
  }

  export default Footer;