module.exports = function toReadable (number) {
    if (number === 0){
        return 'zero'
    }else {
        const arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if(number < 20){
            return arr1[number]
        }else if (number < 100){
            let result = arr2[Math.floor(number / 10)]+ ' ' + arr1 [number%10];
            return result.trim();
        }else{
            let num = number.toString().split('');
            let result = arr1[num[0]]+ ' hundred '
            let s = parseInt(num[1]+num[2]);
            if (s < 20){
                result += arr1[s]
                return result.trim();
            }else {
                result += arr2[Math.floor(s / 10)]+ ' ' + arr1 [s%10];
                return result.trim();
            }
        }
    }
}
