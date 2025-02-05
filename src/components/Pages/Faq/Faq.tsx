'use client';

import { useState } from 'react';
import { Collapse, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const faqData = [
    {
        question: 'How do I create an account on the website?',
        answer:
            "To create an account, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and fill in some basic information like your name and contact details.",
    },
    { question: 'How do I search for jobs?', answer: "To create an account, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and fill in some basic information like your name and contact details.", },
    { question: 'How do I apply for a job?', answer: "To create an account, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and fill in some basic information like your name and contact details.", },
    { question: 'Can I apply for multiple jobs at once?', answer: "To create an account, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and fill in some basic information like your name and contact details.", },
    { question: 'How will I know if my application has been received?', answer: "To create an account, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and fill in some basic information like your name and contact details.", },
    { question: 'What should I do if I forget my password?', answer: "To create an account, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and fill in some basic information like your name and contact details.", },
    { question: 'How do I set up job alerts?', answer: "To create an account, click on the 'Sign Up' button on the homepage. You'll need to provide your email address, create a password, and fill in some basic information like your name and contact details.", },
];

export default function FAQSection() {
    const [activeKey, setActiveKey] = useState(['0']);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4 mt-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently asked questions?</h2>
            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden ">
                {faqData.map((item, index) => (
                    <div key={index} className="border-b">
                        <button
                            onClick={() =>
                                setActiveKey((prev) => (prev.includes(String(index)) ? [] : [String(index)]))
                            }
                            className={`w-full text-left p-4 flex justify-between items-center font-medium ${activeKey.includes(String(index)) ? 'bg-blue-600 text-white' : 'text-gray-800'
                                }`}
                        >
                            {item.question}
                            {activeKey.includes(String(index)) ? <MinusOutlined /> : <PlusOutlined />}
                        </button>
                        {activeKey.includes(String(index)) && item.answer && (
                            <div className="p-4 text-gray-700 bg-gray-50">{item.answer}</div>
                        )}
                    </div>
                ))}
                <div className="mt-10 text-center">
                    <p className="text-gray-600">Still have questions?</p>
                    <p className="text-blue-600 font-medium">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <Button type="primary" className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 mb-10">
                        Get In Touch
                    </Button>
                </div>
            </div>

        </div>
    );
}