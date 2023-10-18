// Du lieu 1
const DolRound1D1 = 96;
const DolRound1D2 = 108;
const DolRound1D3 = 89;

const KoaRound1D1 = 88;
const KoaRound1D2 = 91;
const KoaRound1D3 = 110;
// Du lieu Bonus1
const DolRound2D1 = 97;
const DolRound2D2 = 112;
const DolRound2D3 = 101;

const KoaRound2D1 = 109;
const KoaRound2D2 = 95;
const KoaRound2D3 = 123;
// Du lieu Bonus2
const DolRound3D1 = 97;
const DolRound3D2 = 112;
const DolRound3D3 = 101;

const KoaRound3D1 = 109;
const KoaRound3D2 = 95;
const KoaRound3D3 = 106;

const TBCDol = (DolRound1D1 + DolRound1D2 +DolRound1D3) / 3;
const TBCKoa = (KoaRound1D1 + KoaRound1D2 +KoaRound1D3) / 3;

console.log('Điểm của đội Dolphins là ' + TBCDol.toFixed(1));
console.log('Điểm của đội Koalas là ' + TBCKoa.toFixed(1));

if(TBCDol > TBCKoa && TBCDol >=100){
    console.log('Dolphins team is winner!!!')
} else if(TBCDol < TBCKoa && TBCKoa >=100){
    console.log('Koalas team is winner!!!')
} else if(TBCDol === TBCKoa && TBCDol >= 100 && TBCKoa >= 100){
    console.log('Both win the trophy!')
} else {
    console.log('No one wins')
}