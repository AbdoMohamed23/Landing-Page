import React, { useRef } from 'react';
import { FaPhoneAlt, FaRegCommentDots, FaUser } from 'react-icons/fa';
import { GoCheckCircle } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

const ContactUs = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        // تكوين الرسالة بالعربي
        const subject = encodeURIComponent(`طلب استشارة من ${name}`);
        const body = encodeURIComponent(
            `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nرقم الهاتف: ${phone}\n\nالرسالة:\n${message}`
        );

        // فتح Gmail أو البريد الافتراضي
        window.location.href = `mailto:abdomohamed0139@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <main className='py-20 md:py-24 px-8' id='contact' data-aos="fade-up">
            <div className='contactUs p-7 md:p-10 max-w-[1200px] mx-auto text-center justify-items-center border-3 rounded-lg shadow-lg bg-black/30 backdrop-blur-md'>
                <form onSubmit={handleSubmit} className="p-6 w-full md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-white text-center mb-2">تواصل معنا !</h2>
                    <p className="text-md font-medium text-gray-200 text-center mb-6">
                        تواصل معنا لمناقشة أفكارك، أو طلب المشورة، أو معرفة المزيد عن الخدمة.
                    </p>

                    <div className='grid grid-cols-2 gap-3'>
                        {/* Name */}
                        <div className="relative col-span-1">
                            <FaUser className="absolute right-3 top-3 text-gray-400 text-lg" onClick={() => nameRef.current?.focus()} />
                            <input
                                ref={nameRef}
                                type="text"
                                name="name"
                                required
                                placeholder="أدخل أسمك"
                                className="text-gray-200 w-full px-10 py-2 border border-gray-200 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder-gray-400"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative col-span-1">
                            <MdEmail className="absolute right-3 top-3 text-gray-400 text-lg" onClick={() => emailRef.current?.focus()} />
                            <input
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder="بريد إلكتروني"
                                className="text-gray-200 w-full px-10 py-2 border border-gray-200 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder-gray-400"
                            />
                        </div>

                        {/* Phone */}
                        <div className="relative col-span-2">
                            <FaPhoneAlt className="absolute right-3 top-3 text-gray-400 text-lg" onClick={() => phoneRef.current?.focus()} />
                            <input
                                ref={phoneRef}
                                type="tel"
                                dir='rtl'
                                name="phone"
                                required
                                placeholder="رقم الهاتف"
                                className="text-gray-200 w-full px-10 py-2 border border-gray-200 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder-gray-400"
                            />
                        </div>

                        {/* Message */}
                        <div className="relative col-span-2">
                            <FaRegCommentDots className="absolute right-3 top-3 text-gray-400 text-lg" onClick={() => messageRef.current?.focus()} />
                            <textarea
                                ref={messageRef}
                                rows={3}
                                name="message"
                                required
                                placeholder="أكتب الرسالة..."
                                className="text-gray-200 w-full ps-10 pe-3 py-2 border border-gray-200 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-slate-400 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="inline-block cursor-pointer w-full rounded-xl border border-white bg-transparent px-6 py-3 font-bold text-white hover:bg-primary hover:border-primary shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.03]"
                    >
                        <span className='flex items-center justify-center gap-2'>
                            <GoCheckCircle />اطلب استشارة الآن
                        </span>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default ContactUs;