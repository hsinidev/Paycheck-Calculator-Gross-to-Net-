import React, { useState, ReactNode } from 'react';

const StarIcon = () => (
    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-2xl leading-none">&times;</button>
                </div>
                <div className="p-6 text-gray-300 overflow-y-auto">
                    {children}
                </div>
                 <div className="p-4 border-t border-gray-700 text-right">
                    <button onClick={onClose} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const navLinks = ["About", "Contact", "Guide", "Privacy Policy", "Terms of Service", "DMCA"];
    
    const getModalContent = (modalName: string) => {
        switch(modalName) {
            case "About": return <p>This Paycheck Calculator is a tool designed to provide an estimate of your net take-home pay. It's built with React, Tailwind CSS, and TypeScript for a modern, responsive experience. All calculations are performed client-side for privacy and speed.</p>;
            case "Contact": return <p>For inquiries, please reach out to <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a> or visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">doodax.com</a>.</p>;
            case "Guide": return <p>To use the calculator, enter your Gross Annual Salary, select your Pay Frequency, provide an Estimated Total Tax Rate (as a percentage), and input any regular Pre-Tax Deductions per paycheck (like 401k contributions). Click "Calculate Take-Home Pay" to see the results.</p>;
            case "Privacy Policy": return <p>We respect your privacy. This application runs entirely in your browser. No data you enter is ever sent to or stored on our servers. All calculations are performed on your local machine.</p>;
            case "Terms of Service": return <p>This tool is for estimation purposes only. The calculations are simplified and do not constitute financial advice. Consult with a qualified financial professional for accurate tax planning and financial decisions. We are not liable for any decisions made based on the results of this calculator.</p>;
            case "DMCA": return <p>If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please contact us at <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a> with a valid DMCA notice.</p>;
            default: return null;
        }
    }

    return (
        <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
            {/* Animated Galaxy Background */}
            <style jsx global>{`
              body {
                background-color: #0c0d21;
              }

              @keyframes moveStars {
                from { transform: translateY(0px); }
                to { transform: translateY(-2000px); }
              }

              .stars {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                width: 100%; height: 100%;
                display: block;
                background: transparent;
              }

              .stars-sm {
                width: 1px; height: 1px;
                background: white;
                box-shadow: 792px 1438px #FFF, 1514px 1195px #FFF, 1534px 57px #FFF, 1438px 1282px #FFF, 219px 1210px #FFF, 1039px 1018px #FFF, 1074px 1793px #FFF, 1535px 102px #FFF, 893px 1290px #FFF, 1912px 1475px #FFF, 1378px 1113px #FFF, 1050px 186px #FFF, 1432px 1560px #FFF, 258px 1655px #FFF, 1683px 1817px #FFF, 34px 1850px #FFF, 1195px 678px #FFF, 1019px 1978px #FFF, 109px 1054px #FFF, 1870px 155px #FFF;
                animation: moveStars 120s linear infinite;
              }

              .stars-md {
                width: 2px; height: 2px;
                background: white;
                box-shadow: 1324px 1828px #FFF, 1265px 1779px #FFF, 213px 158px #FFF, 1109px 1495px #FFF, 1804px 1292px #FFF, 1553px 1738px #FFF, 1323px 1813px #FFF, 1093px 1853px #FFF, 915px 1238px #FFF, 321px 40px #FFF;
                animation: moveStars 80s linear infinite;
              }

              .stars-lg {
                width: 3px; height: 3px;
                background: white;
                box-shadow: 1118px 1999px #FFF, 597px 1180px #FFF, 1138px 90px #FFF, 949px 1493px #FFF, 103px 125px #FFF;
                animation: moveStars 50s linear infinite;
              }
            `}</style>
            <div className="absolute inset-0 z-0 opacity-70">
              <div className="stars"><div className="stars-sm"></div></div>
              <div className="stars"><div className="stars-md"></div></div>
              <div className="stars"><div className="stars-lg"></div></div>
            </div>
            
            <div className="relative z-10 flex flex-col min-h-screen">
                <header className="py-4 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-30 backdrop-blur-sm border-b border-gray-700 shadow-lg">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="flex items-center">
                            <StarIcon />
                            <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white">Paycheck Calculator</h1>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            {navLinks.map(link => (
                                <button key={link} onClick={() => setActiveModal(link)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">{link}</button>
                            ))}
                        </nav>
                        <div className="md:hidden">
                            <select onChange={(e) => setActiveModal(e.target.value)} className="bg-gray-800 text-white border border-gray-600 rounded px-2 py-1">
                                <option value="">Menu</option>
                                {navLinks.map(link => (
                                    <option key={link} value={link}>{link}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </header>

                <main className="flex-grow">
                    {children}
                </main>

                <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50 backdrop-blur-sm border-t border-gray-700 text-center text-gray-400">
                    <div className="container mx-auto">
                        <p className="mb-2">
                            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-lg" style={{ color: '#FFD700' }}>Powered by HSINI MOHAMED</a>
                        </p>
                        <p>
                            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
                            <span className="mx-2">|</span>
                            <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
                        </p>
                    </div>
                </footer>
            </div>
            
            <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)} title={activeModal || ''}>
                {activeModal && getModalContent(activeModal)}
            </Modal>
        </div>
    );
};

export default ThemeLayout;