import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Rate = () => {
  const cards = [
    { name: "أحمد النشار", feedback: "صفحة الهبوط اللي صممتها ليا كانت فوق الممتاز! جذبت عملاء كتير في أول أسبوع." },
    { name: "ريم الهاجري", feedback: "شغلك جميل وراقي، والتجربة معك كانت مريحة جدًا." },
    { name: "سالم القحطاني", feedback: "صفحة الهبوط كانت منظمة وواضحة جدًا، شغلك فعلاً يرفع الرأس." },
    { name: "ميادة عادل", feedback: "نفذت صفحة الهبوط بدقة وذوق عالي، فعلاً عرفت توصل فكرة البراند." },
    { name: "محمود سامي", feedback: "التصميم احترافي جدًا، سريع وخفيف وبيعبر عن البراند بشكل مثالي." },
    { name: "عبدالله الزهراني", feedback: "صفحة الهبوط اللي عملتها لي زادت المبيعات بنسبة ممتازة. الله يوفقك." },
    { name: "نوران خالد", feedback: "تصميم راقي ومناسب جدًا لنشاطي، التنفيذ كان أسرع مما توقعت." },
    { name: "فيصل المطيري", feedback: "تعامل راقٍ وتنفيذ سريع. التصميم طلع أنيق ومتناسق مع الهوية." },
    { name: "ياسر عبد الله", feedback: "الموقع التعريفي اللي عملته لي خلا شركتي تبان بمستوى أعلى بكتير." },
    { name: "ناصر الكعبي", feedback: "أعجبتني التفاصيل الدقيقة في الصفحة، حسّيت فعلاً بالاحترافية." },
    { name: "حصة الشمري", feedback: "صفحة الهبوط اللي عملتها لي كانت جذابة وسهلة الاستخدام. شكرًا لك!" },
    { name: "عمر الجوهري", feedback: "اتعاملت معاك مرتين، وكل مرة الموقع بيطلع أجمل من اللي في خيالي." },
    { name: "راشد المنصوري", feedback: "ما شاء الله، تصميم عصري وأداء ممتاز، يستاهل كل ريال." },
    { name: "خالد مصطفى", feedback: "التجربة كانت ممتازة جدًا، كل التفاصيل معمول حسابها، والنتيجة طلعت احترافية." },
  ];

  // تكرار الكروت لعمل تأثير التمرير المستمر
  const duplicatedCards = [...cards, ...cards];

  return (
    <main className="slider-wrapper py-20" id="rate">
      <div className="text-center mb-10">
        <h2 className='text-primary text-4xl font-bold'>آراء العملاء</h2>
      </div>
      <div className="slider-track gap-4">
        {duplicatedCards.map((card, index) => (
          // card
          <div key={index}
            className="w-[300px] bg-white shrink-0 border-8 border-white shadow-lg rounded-2xl p-4 flex flex-col gap-2 items-center text-right mx-2"
          >
            {/* <img className="rounded-full w-16" src={card.img} alt="client" /> */}
            <div>
              <BiSolidQuoteAltLeft className="text-4xl text-primary" />
            </div>
            <p className="text-sm text-gray-800 text-center">{card.feedback}</p>
            <div className='border-2 w-12 border-primary'></div>
            <h2 className="text-xl font-bold text-primary">{card.name}</h2>

            {/* <div className="flex gap-1 flex-row-reverse">
              {[...Array(5)].map((_, i) => (
                <img key={i} className="w-4" src={star} alt="star" />
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Rate;