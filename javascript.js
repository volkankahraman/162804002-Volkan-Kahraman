const SPACE = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
const e = 2.7182,t=1;

function factorial(n) {
    var total = 1,i;
    for (i = 0; i < n; i++){
        total = total * (n - i);
    }
    return total;
}
function binom(x,n,p){
    var q = 1-p; // İlgilenilen Olayın olmama olasılığı
    var binomsonuc = (factorial(n)/(factorial(x)*factorial(n-x)))*Math.pow(p,x)*Math.pow(q,n-x);
    if(binomsonuc<0.0009)
        return SPACE;
    else
        return binomsonuc.toFixed(3);
}
function poisson(lambda,x){
    poissonsonuc = (Math.pow(lambda*t,x)*Math.pow(e,(lambda*-1)*t))/factorial(x);
    return poissonsonuc.toFixed(4);
}

var x,nmax=15,
    n, // Örneklem Büyüklüğü
    p, // İlgilenilen Olayın olasılığı
    lambda=1, //dagilim ortalaması, varyansı, standart sapması
    poissonX; // Raslantı değişkeni hata sayısı olasılık fonksiyonu

for(n=2;n<=nmax;n++){
    for(x=0;x<=n;x++){
        var line = $('#binom').append("<p>");
        (x==0)? line.append(' <div class="variable"> '+n+' </div> '): line.append(' <div class="variable">&zwnj;</div> ') ;
        line.append(' <div class="variable"> '+x+' </div> ');
        line.append(binom(x,n,0.05)+" ");
        for(p = 0.1; p<0.9; p = p+0.1){
            line.append(binom(x,n,p)+" ");
        }
        line.append(binom(x,n,0.95)+" ");
    }
    $('#binom').append('<hr>');
}
for(poissonX=0;poissonX<=15;poissonX++){
    var line = $('#poisson').append("<p>");
    line.append(' <div class="variable"> '+poissonX+' </div> ');
    for(lambda=1;lambda<=15;lambda++){
        line.append(poisson(lambda,poissonX)+" ");
    }
    
}
$('#poisson').append("<hr>");

    