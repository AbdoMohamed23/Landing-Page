import React from 'react';

const ContactUs = () => {
    return (
        <main className='py-20 md:py-24 px-8' id='contactUs' data-aos="fade-up">
            <div className='bg-gray-100 p-7 md:p-16 mx-auto md:w-1/2 text-center justify-items-center border-3 rounded-lg border-pragraph'>
                <form action={"mailto:abdomohamed0139@gmail.com"} method='POST' encType='text/plain' className="p-6 w-full max-w-md space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">تواصل معنا</h2>
                    <div>
                        <div className='grid grid-cols-2 gap-2 py-3'>
                            {/* Name */}
                            <input type="text" name="name" required placeholder="أدخل أسمك" className="col-span-1 w-full px-4 py-2 border border-pragrap rounded-lg focus:outline-none focus:ring-2 focus:ring-slate10border-pragraph" />
                            {/* Email */}
                            <input type="email" name="email" placeholder="أدخل الأيميل" className="col-span-1 w-full px-4 py-2 border border-pragrap rounded-lg focus:outline-none focus:ring-2 focus:ring-slate10border-pragraph" />
                            {/* Phone */}
                            <input type="tel" name="phone" required placeholder="رقم الهاتف" className="col-span-2 w-full px-4 py-2 border border-pragraph rounded-lg focus:outline-none focus:ring-2 focus:ring-slate10border-pragrap" />
                            {/* Message */}
                            <textarea rows={3} name="massage" required placeholder="أكتب الرسالة..." className="col-span-2 w-full px-4 py-2 border border-pragraph rounded-lg focus:outline-none focus:ring-2 focus:ring-slate10border-pragrap" />
                        </div>
                        {/* Button */}
                        <button type="submit" className="inline-block cursor-pointer w-full rounded-2xl border border-cta bg-cta px-6 py-2 font-medium text-pragraph hover:bg-cta/90 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
                            اطلب استشارة الآن
                        </button>
                    </div>
                </form>
            </div>
        </main >
    )
}

export default ContactUs