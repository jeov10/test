function PMT(ir, np, pv, fv, type) {
  /*
  * ir   - interest rate per month
  * np   - number of periods (months)
  * pv   - present value
  * fv   - future value
  * type - when the payments are due:
  *        0: end of the period, e.g. end of month (default)
  *        1: beginning of period
  */
  var pmt, pvif;

  fv || (fv = 0);
  type || (type = 0);

  if (ir === 0)
  return -(pv + fv)/np;

  pvif = Math.pow(1 + ir, np);
  pmt = - ir * pv * (pvif + fv) / (pvif - 1);

  if (type === 1)
  pmt /= (1 + ir);

  return pmt;
}

const lending = 5000//Number(document.getElementById("amount").value) //MONTO DEL PRESTAMO
const TIO = 13.5/100//Number(document.getElementById("TIO").value) //TASA DE INT ORDINARIO
//const month = fields.approvedCredit.term //PLAZO
const TIVA = 0.16 //TASA IVA
const commission = 0.001 //COMISIÓN PLATAFORMO
//DATOS INICIALES CALCULADOS
const TIIVA = TIO * (1 + TIVA) //tasa de int con IVA
const TIM = TIO/12 //Tasa de interes mensual
const TIMIVA = TIIVA/12//Tasa de interes mensual con IVA
const commissionIVA = commission * 1.16// IVA COMISION
//const cuotaMensual = -PMT(TIMIVA, month, lending)

let saldo = 0
let interes = 0
let ivaInt = 0
let abonoCapital = 0
let saldoInicial = lending
let mensualidad = 0

for (let i = 6; i <= 48; i++) {
  const cuotaMensual = -PMT(TIMIVA, i, lending)
  saldoInicial = saldoInicial - abonoCapital
  saldo = Math.round(saldoInicial)
  interes = Math.round(saldo) * TIM.toFixed(5)
  ivaInt = Math.round(interes) * 0.16
  abonoCapital = cuotaMensual - interes - ivaInt
  let platformCommission = lending * commission
  let ivaCommission = platformCommission * 0.16
  let saldoFinal = saldo - Math.round(abonoCapital)
  mensualidad = interes + abonoCapital + platformCommission + ivaInt + ivaCommission
  i+5
  if(i%6 == 0) {
    console.log('A '+ i + 'meses: ' + mensualidad.toFixed())
  }
}
