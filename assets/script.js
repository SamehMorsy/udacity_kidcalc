document.getElementById("login-form").addEventListener("submit",function(get){
    get.preventDefault();
    
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let theme = document.getElementById("themes").value;
    
    document.getElementById("informationBar").textContent=`Hello ${name},`;
    changetheme(theme);
    
    })
    function changetheme(theme){
        let themeFile = "";
    
        switch (theme){
            case "default-theme":
                themeFile = "assets/style.css";
                break;
            case "dinosaur-theme":
                themeFile = "assets/theme1.css";
                break;
            case "marvel-theme":
                themeFile = "assets/theme2.css";
                break;
            case "space-theme":
                themeFile = "assets/theme3.css";
                break;
            default:
                themeFile = "assets/style.css";
        }
        document.getElementById("cssfile").href=themeFile;
    }
    let operation = "";
    function addToOperation(operator){
        if(operator=='c'){
            operation='';
            document.getElementById("operation").value='';
        }else{
            operation += operator;
            document.getElementById("operation").value=operation;
        }
    }
    function calculate(){
        let answer = document.getElementById("answer").value;
        let score = parseInt(document.getElementById("score").textContent);
        let result="";
        try{
            result = eval(operation);
            if(result == answer){
                document.getElementById("result").value = "Great Job";
                score += 1;
                
            }else{
                document.getElementById("result").value = "Try again";
            }
    
        }catch (error){
            document.getElementById("results").value = "Invalid expression";
        }
        
        document.getElementById("score").textContent = score;
    
    }
    
    