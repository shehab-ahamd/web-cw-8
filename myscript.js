// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او
let age =19; 
function drivind (x){
    
    if (age >= 18){
        console.log(`مبروك عمرك ${age} تستطيع الحصول على ليسن القيادة 🚘😍 `);
    }
    else if (x.age <18){
        console.log(`للأسف عمرك ${age} عمرك لا يسمح لك باخذ ليسن للقيادة`);
        }
    }


// لا تنسى أن تنادي الدالة

drivind()
    
// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او

let iceCream = ["ككاو", "فراولة", "مووز"];
for (const nkha of iceCream) {
    console.log(`النكهات المتوفرة لدينة ${nkha}`)
}



// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام

// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام
let number = 0


let mov = ["الحفرة", "باتمان", "سبونج بوب"];
  myIceCream(mov)

function myIceCream(y) {
    console.log(y)
}
while (number < 1) {
    console.log(mov[number])
    number++
}