// =========== PERULANGAN MENGGUNAKAN FOR =============


    // var s ='';

    // for (var i = 0; i < 10 ; i++){
    //     for (var j = 10; j > i; j--){
    //         s += '*'

    //     }
    //     // for (var j = 10; j > i; j--){
    //     //     s += i+1
            
    //     // }
    //     s += '\n'
    // }

    // console.log(s)

    // // ============================== //

    // var ss= "";
    // for(var a = 0 ; a < 10;a++){
    //     for (var b = 0; b <a; b++){
    //         ss += ' ';
            
    //     }
    //     for(var c = 10; c >a ; c--){
    //         ss += '*';
            
            
    //     }
    //     // ss += '\n';
    //     ss += '\n';
    // }
    // console.log(ss)

    // // --------------------------------------- //
    // var sss = '';

    // for(var o = 1; o <= 10; o++){
    //     for(var p = 9; p >= o ; p--){
    //         sss+=' ';
    //     }
    //     for (var q = 1; q <=o;q++){
    //         sss += '*'
    //     }
    //     for (var r = 1; r <= o-1; r++){
            
    //         sss += '*'
    //     }
    //     sss += '\n'
    // }

    // console.log(sss)

    // // ----------------------------- //
    // var si = ''

    // for (var a = 0 ; a < 10; a++){
    //     if(a % 2 == 1 ){
    //         si += ' '

    //     }
    //     for (var c = 1 ; c < 16; c++){
    //         if(c % 2 == 0 ){
    //             si += '#'

    //         }
    //         else{
    //             si += ' '
    //         }

    //     }
    //     si += '\n'
    // }

    // console.log(si)





    
// ================ REKURSIF ============


// function tampil(n){
//     if(n === 0) return;

//     console.log(n)
//     return tampil(n-1)
// }

// tampil(10)

// ========== array ==============
// menampilkan isi array
// var arr = ['ahmad','nur','hidayat'];

// for (var i =0; i < arr.length; i ++){

//     console.log('mahasiswa ke - '+(i+1)+' = '+arr[i])
// }

// Method pada array
// var arr = ['ahmad','nur','hidayat','riski','doni'];
// 1. join
    // console.log(arr.join('_'))

// 2. push & pop
    // arr.push('zaed')
    // console.log(arr.join('_'))

    // arr.pop()
    // console.log(arr.join('_'))

// 3. unshift & shift

    // arr.unshift('zaid')
    // console.log(arr.join('_'))

    // arr.shift()
    // console.log(arr.join('_'))

// 4. splice
// splice(indexAwal, mauDiHapusberapa, elemenBaru1, elemenBaru2)

    // arr.splice(1, 2, 'abel' , 'dion')
    // console.log(arr.join('_'))

// 5. slice
// slice(awal ,akhir);

    // var arr2 = arr.slice(1,4)
    // console.log(arr2.join('_'))

// 6. forEach

// arr.forEach(function (isi,index){
//     console.log('mahasiswa ke - '+(index+1)+' : '+ isi)
// })

// 7. map
// sama seperti forEach, cuman bedanya map itu mengembalikan array

    // var angka = [1,2,4,5,6,7,8,9]

    // var angka2 = angka.map(function(e){
    //     return e
    // })

    // console.log(angka2.join('-'))

// //8. sort

// var angka = [3,2,1,4,5,10,20,30,100,200]
// console.log(angka.join('-'))
// angka.sort();
// console.log(angka.join('-'))

// // untuk mengurutkan angka 2 digit lebih maka harus buat sebuah fungsi like this :

// angka.sort(function(a,b){
//     return a-b
// })
// console.log(angka.join('-'))

// 9. filter & find
// filter mengembalikan sebuah array tetapi tidak dengan find , filter mengambil data lebih dari 1 tapi find hanya menemukan 1 data saja

// var angka = [3,2,1,4,5,10,20,30,100,200]
// var angka2 = angka.filter(function(x){
//     return x > 5;
// })
// console.log(angka2.join('-'))

// var angka2 = angka.find(function(x){
//     return x > 2;
// })
// console.log(angka2)












// ================================ //
// latihan pengelolaan penumpang angkot //

var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){

    if (penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    }

    else{
        for(var i = 0; i < penumpang.length ; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang
                return penumpang;
            }
            else if(penumpang[i] === namaPenumpang){
                console.log(namaPenumpang+' Telah berada di dalam angkot')
                return penumpang
            }

            else if (i == penumpang.length - 1){

                penumpang.push(namaPenumpang)
                return penumpang
            }
        }
    }

}

var hapusPenumpang = function(namaPenumpang , penumpang){
    if (penumpang.length == 0){
        console.log('Kursi Kosong')
        return penumpang
    }
    else{
        for( var x = 0; x < penumpang.length; x ++){
            if(namaPenumpang == penumpang[x]){
                penumpang[x] = undefined
                return penumpang
            }
            else if(x == penumpang.length-1 ) {
                console.log('Tidak ada nama yang sesuai')
                return penumpang
                
            }


        }


    }
}