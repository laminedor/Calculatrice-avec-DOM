

function Ecrire(valeur){
    var val = document.querySelector('input');
    val.value=val.value + valeur;
}

function Effacer(){
    var val = document.querySelector('input');
    val.value=null;
}

function EffacerUn(){
    var val = document.querySelector('input');
    val.value = val.value.slice(0,-1);
}


var Pile = {"Tete": [],
            "taille":0};


function PileVide(){
    if(Pile.taille == 0)
        return true
    return false;
}
        

function Empiler(val){
    Pile.Tete.push(val);
    Pile.taille++;
}


function Depiler(val){
    if(!PileVide())
    {
        Pile.taille--;
        return Pile.Tete.pop();
    }
    else
        return false
}


function EvaluerOp(){
    var val = document.querySelector('input');
    Operation = val.value;
    let i = 0;
    let tailleChaine = val.value.length;
    console.log(tailleChaine);
    while(i<tailleChaine){
        let j=i;
        while(val.value[i] != '+' && val.value[i] != '-' && val.value[i] != '*' && val.value[i] != '/' && i < tailleChaine)
        {
            console.log(val.value[i]);
            i++;    
        }
            
        if(j == i && i < tailleChaine)
        {
            Empiler(val.value[i]);
            i++;
        }    
        else
        {
            if(!PileVide())
            {
                op = Depiler();
                if(op == '/')
                {
                    valeur2 = Depiler();
                    calcul = parseFloat(valeur2) / parseFloat(val.value.substring(j,i));
                    chaine = calcul + "";
                    Empiler(chaine);
                }
                else if(op == '*')
                {
                    valeur2 = Depiler();
                    calcul = parseFloat(valeur2) * parseFloat(val.value.substring(j,i));
                    chaine = calcul + "";
                    Empiler(chaine);
                }
                else if(op == '-')
                {
                    valeur2 = val.value.substring(j,i);
                    chaine = "-" + valeur2;
                    Empiler('+');
                    Empiler(chaine);

                }
                else{
                    Empiler(op);
                    Empiler(val.value.substring(j,i));
                }
                
            }
            else
            {
                Empiler(val.value.substring(j,i))
            }
                
        } 
        console.log(Pile.Tete);
    }
    while(!PileVide()){
        var Resultat = Depiler();
        if(!PileVide()){
            op = Depiler();
            if(op == '+')
            {
                valeur2 = Depiler();
                calcul = parseFloat(valeur2) + parseFloat(Resultat);
                chaine = calcul + "";
                Empiler(chaine);
            }
            else if(op == '-')
            {
                valeur2 = Depiler();
                calcul = parseFloat(valeur2) - parseFloat(Resultat);
                chaine = calcul + "";
                Empiler(chaine);
            }
        }
        console.log(Pile.Tete);
    }
    document.getElementById('AfficheResultat').style.opacity='0%';
    val.value = Resultat;
    document.getElementById('AfficheResultat').style.opacity='100%';


}
