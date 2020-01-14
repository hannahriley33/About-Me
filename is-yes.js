export default function isYes(input){
    if (input === 'yes') {
        return true;
    }
    if (input === 'Yes') {
        return true;
    }
    if (input === 'Y') {
        return true;
    }
    if (input === 'y') {
        return true;
    }
    else return false;

}