const input_text = document.getElementById("text");
const input_pass = document.getElementById("password");
const checkbox = document.getElementById("RememberMe");
const arabic = document.getElementById("arabic");
const french = document.getElementById("french");
const important_text = document.getElementById("important_text");
const btnSubmit = document.getElementById("btnSubmit");
const text = document.getElementById("text");
const WelcomeTitle = document.getElementById("WelcomeTitle");
const WelcomeDesc = document.getElementById("WelcomeDesc");
checkbox.addEventListener("click" , function() {
    if(!input_text == "" && !input_pass == "") {
        localStorage.setItem("ID" , input_text.value);
        localStorage.setItem("Password" , input_pass.value);
        sessionStorage.setItem("ID" , input_text.value);
        sessionStorage.setItem("Password" , input_pass.value);
    } else {
        localStorage.clear();
        sessionStorage.clear();
    }
});

arabic.onclick = function() {
    WelcomeTitle = `مرحبًا بك في حسابك الخاص` ;
    WelcomeDesc = `نظومة معلوماتية متكاملة تمكن من إرساء طرق عمل جديدة للتدبير
    المدرسي على صعيد المؤسسات التعليمية`  ;
    input_text.placeholder = `إسم المستخدم` ;
    input_pass.placeholder = `كلمة المرور` ;
    important_text = `حفظ بيانات الدخول` ;
    arabic = `العربية` ;
    french = `الفرنسية` ;
    text = `استرجاع كلمة المرور`;
} 
french.onclick = function() {
    WelcomeTitle = `Bienvenue sur
    votre compte` ;
    WelcomeDesc = `Un système d’information intégré qui permet la mise en place de nouvelles méthodes de travail pour
    la gestion scolaire au niveau des établissements d’enseignement` ;
    input_text.placeholder = `
    nom d'utilisateur` ;
    input_pass.placeholder = `mot de passe` ;
    important_text == `Enregistrer les données de connexion` ;
    arabic = `arabe` ;
    french = `Français` ;
    text =`Récupérer le mot de passe`;
}

if(WelcomeTitle == `مرحبًا بك في حسابك
    الخاص` || WelcomeDesc == `نظومة معلوماتية متكاملة تمكن من إرساء طرق عمل جديدة للتدبير
    المدرسي على صعيد المؤسسات التعليمية` || input_text.placeholder == `إسم المستخدم` || input_pass.placeholder == `كلمة المرور` || important_text == `حفظ بيانات الدخول` || arabic == `العربية` || french == `الفرنسية` || text == `استرجاع كلمة المرور
    `) {
        arabic.style.color = "black";
        document.body.style.direction = "ltr";
    } else {
        arabic.style.color = "#000000bd";
    }
    if(WelcomeTitle == `Bienvenue sur
    votre compte` || WelcomeDesc == `Un système d’information intégré qui permet la mise en place de nouvelles méthodes de travail pour
    la gestion scolaire au niveau des établissements d’enseignement` || input_text.placeholder == `
    nom d'utilisateur` || input_pass.placeholder == `mot de passe` || important_text == `Enregistrer les données de connexion` || arabic == `arabe` || french == `Français` || text == `Récupérer le mot de passe`) {
        french.style.color = "black";
        document.body.style.direction = "rtl";
    } else {
        french.style.color = "#000000bd";
    }