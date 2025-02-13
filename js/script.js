// Ini file Javascript

console.log('Javascript is working!');

function validateForm() {
    let input = document.getElementById('main-input');
    console.log(input.value);


    if (input.value == '') {
        alert('Tolong diisi ya');
    } else {
        /// Proses konversi
        let calc = convertToCelcius(input.value);
        calc = (input.value * (9/5) + 32) ;

        /// Tampilkan hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('cara-konversi').value = `Hasil dari perhitungan diatas dengan menggunakan rumus (C * 9/5) + 32 hasilnya ${input.value * (9/5) + 32} F`;
        console.log('Berhasil');
    }
}

/// Fungsi konversi
let convertToCelcius = (input) => {
    return input * 2;
}