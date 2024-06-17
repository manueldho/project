import React, { ReactNode } from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ContactDetail icon={<LocationIcon />} text="1234 Street Name, City, Country" />
                            <ContactDetail icon={<PhoneIcon />} text="+1234567890" />
                            <ContactDetail icon={<EmailIcon />} text="info@example.com" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Get to Know Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300 transition-all duration-300">
                                <i className="fab fa-facebook">Careers</i>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-all duration-300">
                                <i className="fab fa-twitter">Blog</i>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-all duration-300">
                                <i className="fab fa-instagram">About ABC Store</i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-700 my-8" />
                <div className="text-center">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} ABC Store. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

interface ContactDetailProps {
    icon: ReactNode;
    text: string;
  }

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, text }) => {
    return (
        <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
            <span>{icon}</span>
            <p>{text}</p>
        </div>
    );
}

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 0a7 7 0 00-7 7c0 5.32 6.252 11.09 6.542 11.447a.5.5 0 00.916 0C13.748 18.09 20 12.32 20 7a7 7 0 00-7-7zm0 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.708 2.292a1 1 0 00-1.414 0l-3.854 3.854a1 1 0 01-1.206.187l-2.29-.915a13.163 13.163 0 01-3.42 3.42l.915 2.29a1 1 0 01-.187 1.206l-3.854 3.854a1 1 0 000 1.414l2.828 2.828a1 1 0 001.414 0l3.854-3.854a1 1 0 011.206-.187l2.29.915a13.163 13.163 0 013.42-3.42l-.915-2.29a1 1 0 01.187-1.206l3.854-3.854a1 1 0 000-1.414l-2.828-2.828z" clipRule="evenodd" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 4a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2h16zM3 6l7 4 7-4v8H3V6zm7 5l-4 2h8l-4-2z" clipRule="evenodd" />
    </svg>
);

export default Footer;
