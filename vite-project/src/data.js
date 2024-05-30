const data = [
  {
    size: '4.00-5',
    valveCode: 'TR13',
    weight: 0.4,
    flatWidth: '96',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.50-7',
    valveCode: 'TR13',
    weight: 0.34,
    flatWidth: '94',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.50‐8',
    valveCode: 'V1‐08‐3',
    weight: 0.34,
    flatWidth: '94',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.00/4.10-8 E',
    valveCode: 'V1-08-3',
    weight: 0.55,
    flatWidth: '110',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.00‐8',
    valveCode: 'V1‐08‐3',
    weight: 0.41,
    flatWidth: '110-114',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.00-8',
    valveCode: 'TR13',
    weight: 0.41,
    flatWidth: '114',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75/3.00‐10',
    valveCode: 'V1‐08‐1',
    weight: 0.35,
    flatWidth: '82',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.25/3.50-10 E',
    valveCode: 'V1-08-1',
    weight: 0.35,
    flatWidth: '93',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.50‐10/90/90‐10',
    valveCode: 'V1‐08‐1',
    weight: 0.4,
    flatWidth: '93',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '90/100‐10',
    valveCode: 'V1‐08‐1',
    weight: 0.4,
    flatWidth: '89',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.00‐10',
    valveCode: 'V1‐08‐1',
    weight: 0.48,
    flatWidth: '110',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.00‐10',
    valveCode: 'TR13',
    weight: 0.48,
    flatWidth: '110',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '90.90‐12',
    valveCode: 'V1‐08‐1',
    weight: 0.39,
    flatWidth: '81',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.00/3.50‐12',
    valveCode: 'V1‐08‐1',
    weight: 0.45,
    flatWidth: '81',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.75‐12',
    valveCode: 'V1‐08‐1',
    weight: 0.45,
    flatWidth: '102',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.00‐12',
    valveCode: 'V1‐08‐1',
    weight: 0.45,
    flatWidth: '102',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.25‐16',
    valveCode: 'TR 29',
    weight: 0.38,
    flatWidth: '64',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.50‐16',
    valveCode: 'TR 29',
    weight: 0.38,
    flatWidth: '65',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.25/3.50-16 E',
    valveCode: 'TR 29',
    weight: 0.45,
    flatWidth: '89',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.25‐16/3.50‐16',
    valveCode: 'TR 29',
    weight: 0.53,
    flatWidth: '89',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.75‐16',
    valveCode: 'TR 29',
    weight: 0.56,
    flatWidth: '89',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75/3.00‐14',
    valveCode: 'TR 29',
    weight: 0.425,
    flatWidth: '75',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.25/2.50-17 E',
    valveCode: 'TR 29',
    weight: 0.32,
    flatWidth: '78',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75/3.00‐17',
    valveCode: 'TR 29',
    weight: 0.475,
    flatWidth: '73',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75/3.00‐17 E',
    valveCode: 'TR 29',
    weight: 0.43,
    flatWidth: '81',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.25/2.50-18 E',
    valveCode: 'TR 29',
    weight: 0.35,
    flatWidth: '71',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75‐18',
    valveCode: 'TR 29',
    weight: 0.475,
    flatWidth: '68',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75/3.00‐18',
    valveCode: 'TR 29',
    weight: 0.5,
    flatWidth: '76',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75/3.00‐18 E',
    valveCode: 'TR 29',
    weight: 0.45,
    flatWidth: '84',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '90/90‐18',
    valveCode: 'TR 29',
    weight: 0.525,
    flatWidth: '84',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.00‐18',
    valveCode: 'TR 29',
    weight: 0.5,
    flatWidth: '77',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.50‐18, 80/100‐18',
    valveCode: 'TR 29',
    weight: 0.55,
    flatWidth: '94',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.25‐19/3.50‐19',
    valveCode: 'TR 29',
    weight: 0.6,
    flatWidth: '92',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '3.50‐19',
    valveCode: 'TR 29',
    weight: 0.65,
    flatWidth: '92',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '90/90‐17',
    valveCode: 'TR 29',
    weight: 0.57,
    flatWidth: '90',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '100/90‐17',
    valveCode: 'TR 29',
    weight: 0.57,
    flatWidth: '95',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.00/4.10-17 E',
    valveCode: 'TR 29',
    weight: 0.53,
    flatWidth: '102',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.00/4.10-18 E',
    valveCode: 'TR 29',
    weight: 0.55,
    flatWidth: '102',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '110/90‐18',
    valveCode: 'TR 29',
    weight: 0.65,
    flatWidth: '94',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '100/90‐18',
    valveCode: 'TR 29',
    weight: 0.59,
    flatWidth: '94',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '80/100‐18',
    valveCode: 'TR 29',
    weight: 0.625,
    flatWidth: '75',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '130/90‐15',
    valveCode: 'TR 29',
    weight: 0.75,
    flatWidth: '136',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '2.75/3.00-21',
    valveCode: 'TR 29',
    weight: 0.5,
    flatWidth: '78',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '90/90-21',
    valveCode: 'TR 29',
    weight: 0.5,
    flatWidth: '78',
    type: 'scooter, moped and motorcycle range'
  },
  {
    size: '4.50‐10',
    valveCode: 'TR 13',
    weight: 0.55,
    flatWidth: '130',
    type: 'passenger car/light truck bias'
  },
  {
    size: '4.80‐10',
    valveCode: 'TR 13',
    weight: 0.55,
    flatWidth: '130',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.00‐10',
    valveCode: 'TR 13',
    weight: 0.55,
    flatWidth: '130',
    type: 'passenger car/light truck bias'
  },
  {
    size: '4.25/4.50-12 E',
    valveCode: 'TR 13',
    weight: 0.58,
    flatWidth: '133',
    type: 'passenger car/light truck bias'
  },
  {
    size: '4.50‐12',
    valveCode: 'TR 13',
    weight: 0.55,
    flatWidth: '123',
    type: 'passenger car/light truck bias'
  },
  {
    size: '4.80‐12',
    valveCode: 'TR 13',
    weight: 0.55,
    flatWidth: '123',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.00‐12',
    valveCode: 'TR 13',
    weight: 0.6,
    flatWidth: '123',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.20‐12',
    valveCode: 'TR 13',
    weight: 0.6,
    flatWidth: '123',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.50‐12',
    valveCode: 'TR 13',
    weight: 0.6,
    flatWidth: '123',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.65‐12',
    valveCode: 'TR 13',
    weight: 0.6,
    flatWidth: '131',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.90‐12',
    valveCode: 'TR 13',
    weight: 0.6,
    flatWidth: '131',
    type: 'passenger car/light truck bias'
  },
  {
    size: '155-12',
    valveCode: 'TR 13',
    weight: 0.75,
    flatWidth: '150',
    type: 'passenger car/light truck bias'
  },
  {
    size: '165 D 12',
    valveCode: 'TR 13',
    weight: 0.75,
    flatWidth: '150',
    type: 'passenger car/light truck bias'
  },
  {
    size: '6.00‐12',
    valveCode: 'TR 13 / TR 15',
    weight: 0.8,
    flatWidth: '153',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.20‐14',
    valveCode: 'TR 13',
    weight: 0.8,
    flatWidth: '147',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.50‐14',
    valveCode: 'TR 13',
    weight: 0.8,
    flatWidth: '147',
    type: 'passenger car/light truck bias'
  },
  {
    size: '6.50-14',
    valveCode: 'TR 13',
    weight: 0.8,
    flatWidth: '147',
    type: 'passenger car/light truck bias'
  },
  {
    size: 'G7815',
    valveCode: 'TR 15',
    weight: 1.15,
    flatWidth: '180',
    type: 'passenger car/light truck bias'
  },
  {
    size: 'F7815',
    valveCode: 'TR 13 / TR 15',
    weight: 1.15,
    flatWidth: '180',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.60‐15',
    valveCode: 'TR 13',
    weight: 0.9,
    flatWidth: '156',
    type: 'passenger car/light truck bias'
  },
  {
    size: '5.90‐15',
    valveCode: 'TR 13',
    weight: 0.9,
    flatWidth: '156',
    type: 'passenger car/light truck bias'
  },
  {
    size: '6.70‐15',
    valveCode: 'TR 13',
    weight: 1,
    flatWidth: '180',
    type: 'passenger car/light truck bias'
  },
  {
    size: '7.00‐15',
    valveCode: 'TR 13',
    weight: 1.3,
    flatWidth: '196',
    type: 'passenger car/light truck bias'
  },
  {
    size: '7.50‐15',
    valveCode: 'TR 13',
    weight: 1.3,
    flatWidth: '196',
    type: 'passenger car/light truck bias'
  },
  {
    size: '7.50‐15',
    valveCode: 'TR 15',
    weight: 1.5,
    flatWidth: '196',
    type: 'passenger car/light truck bias'
  },
  {
    size: '6.25‐16',
    valveCode: 'TR 13',
    weight: 1.08,
    flatWidth: '166',
    type: 'passenger car/light truck bias'
  },
  {
    size: '6.50‐16',
    valveCode: 'TR 13',
    weight: 1.1,
    flatWidth: '166',
    type: 'passenger car/light truck bias'
  },
  {
    size: '6.00‐16',
    valveCode: 'TR 13',
    weight: 1.05,
    flatWidth: '166',
    type: 'passenger car/light truck bias'
  },
  {
    size: '6.50‐16',
    valveCode: 'TR 75A, TR 177A',
    weight: 1.2,
    flatWidth: '166',
    type: 'passenger car/light truck bias'
  },
  {
    size: '7.00‐16',
    valveCode: 'TR 15',
    weight: 1.3,
    flatWidth: '212',
    type: 'passenger car/light truck bias'
  },
  {
    size: '7.50‐16',
    valveCode: 'TR 15',
    weight: 1.5,
    flatWidth: '224',
    type: 'passenger car/light truck bias'
  },
  {
    size: '7.50/8.25‐16',
    valveCode: 'TR 177 A',
    weight: 1.68,
    flatWidth: '224',
    type: 'passenger car/light truck bias'
  },
  {
    size: '8.25‐16',
    valveCode: 'TR 177 A',
    weight: 1.68,
    flatWidth: '228',
    type: 'passenger car/light truck bias'
  },
  {
    size: '9.00‐16',
    valveCode: 'TR 177 A',
    weight: 2.3,
    flatWidth: '276',
    type: 'passenger car/light truck bias'
  },
  {
    size: '145 R 12',
    valveCode: 'TR 13',
    weight: 0.715,
    flatWidth: '141',
    type: 'passenger car'
  },
  {
    size: '145/80R12',
    valveCode: 'TR 13',
    weight: 0.715,
    flatWidth: '146',
    type: 'passenger car'
  },
  {
    size: '145/70R‐12',
    valveCode: 'TR 13',
    weight: 0.74,
    flatWidth: '133',
    type: 'passenger car'
  },
  {
    size: '145 R 13',
    valveCode: 'TR 13',
    weight: 0.815,
    flatWidth: '133',
    type: 'passenger car'
  },
  {
    size: '165-13, FR 13 E',
    valveCode: 'TR 13',
    weight: 0.65,
    flatWidth: '145',
    type: 'passenger car'
  },
  {
    size: '155/70 R 13',
    valveCode: 'TR 13',
    weight: 0.815,
    flatWidth: '145',
    type: 'passenger car'
  },
  {
    size: '155/80 R 13',
    valveCode: 'TR 13',
    weight: 0.815,
    flatWidth: '145',
    type: 'passenger car'
  },
  {
    size: '145/70 R 13',
    valveCode: 'B46357',
    weight: 0.815,
    flatWidth: '145',
    type: 'passenger car'
  },
  {
    size: '165/65 R 13',
    valveCode: 'B46357',
    weight: 0.85,
    flatWidth: '162',
    type: 'passenger car'
  },
  {
    size: '175-14, FR 14 E',
    valveCode: 'TR 13',
    weight: 0.8,
    flatWidth: '164',
    type: 'passenger car'
  },
  {
    size: '165 70 R 14',
    valveCode: 'TR 13',
    weight: 0.85,
    flatWidth: '164',
    type: 'passenger car'
  },
  {
    size: '165/80 R 14',
    valveCode: 'B46357',
    weight: 0.85,
    flatWidth: '164',
    type: 'passenger car'
  },
  {
    size: '170/70 R 14',
    valveCode: 'TR 13',
    weight: 0.85,
    flatWidth: '164',
    type: 'passenger car'
  },
  {
    size: '175/65 R 14',
    valveCode: 'TR 13',
    weight: 0.85,
    flatWidth: '164',
    type: 'passenger car'
  },
  {
    size: '175/165/65 R 14',
    valveCode: 'B46357',
    weight: 0.85,
    flatWidth: '164',
    type: 'passenger car'
  },
  {
    size: '175/165/65 R 14',
    valveCode: 'TR 13',
    weight: 0.9,
    flatWidth: '164',
    type: 'passenger car'
  },
  {
    size: '185/70 R 14',
    valveCode: 'TR 13',
    weight: 1,
    flatWidth: '186',
    type: 'passenger car'
  },
  {
    size: '185 R 14',
    valveCode: 'TR 13',
    weight: 1.1,
    flatWidth: '186',
    type: 'passenger car'
  },
  {
    size: '195/70 R 14',
    valveCode: 'TR 13',
    weight: 1.1,
    flatWidth: '186',
    type: 'passenger car'
  },
  {
    size: '215/75 R 15',
    valveCode: 'TR 13',
    weight: 1.2,
    flatWidth: '205',
    type: 'passenger car'
  },
  {
    size: '205/60 R 15',
    valveCode: 'TR 13',
    weight: 1.2,
    flatWidth: '205',
    type: 'passenger car'
  },
  {
    size: '205/65 R 15',
    valveCode: 'B46357',
    weight: 1.2,
    flatWidth: '205',
    type: 'passenger car'
  },
  {
    size: '7.00 R 15',
    valveCode: 'TR 13',
    weight: 1.3,
    flatWidth: '196',
    type: 'passenger car'
  },
  {
    size: '185/85 R 16',
    valveCode: 'TR 13',
    weight: 1.38,
    flatWidth: '206',
    type: 'passenger car'
  },
  {
    size: '185 R 16, FR 16',
    valveCode: 'TR 13',
    weight: 1.38,
    flatWidth: '206',
    type: 'passenger car'
  },
  {
    size: '185/85 R 16',
    valveCode: 'B46357',
    weight: 1.45,
    flatWidth: '206',
    type: 'passenger car'
  },
  {
    size: '700 R 16',
    valveCode: 'B46357',
    weight: 1.6,
    flatWidth: '212',
    type: 'passenger car'
  },
  {
    size: '235/70 R 16',
    valveCode: 'B46357',
    weight: 1.6,
    flatWidth: '203',
    type: 'passenger car'
  },
  {
    size: '5.50 R 16',
    valveCode: 'TR 13',
    weight: 1.2,
    flatWidth: '166',
    type: 'passenger car'
  },
  {
    size: '6.00 R 16',
    valveCode: 'TR 13',
    weight: 1.2,
    flatWidth: '166',
    type: 'passenger car'
  },
  {
    size: '225/65 R 17',
    valveCode: 'TR 13',
    weight: 2.15,
    flatWidth: '250',
    type: 'passenger car'
  },
  {
    size: '235/65 R 17',
    valveCode: 'TR 13',
    weight: 2.15,
    flatWidth: '250',
    type: 'passenger car'
  },
  {
    size: '235/70 R 17',
    valveCode: 'TR 13',
    weight: 2.15,
    flatWidth: '250',
    type: 'passenger car'
  },
  {
    size: '7.00 R 15',
    valveCode: 'TR 13',
    weight: 1.3,
    flatWidth: '196',
    type: 'light truck - Radial'
  },
  {
    size: 'GR78‐15',
    valveCode: 'TR 13',
    weight: 1.15,
    flatWidth: '180',
    type: 'light truck - Radial'
  },
  {
    size: 'FR78‐15',
    valveCode: 'TR 13',
    weight: 1.15,
    flatWidth: '180',
    type: 'light truck - Radial'
  },
  {
    size: '6.00 R 16',
    valveCode: 'TR 13',
    weight: 1.2,
    flatWidth: '166',
    type: 'light truck - Radial'
  },
  {
    size: '6.50 R 16',
    valveCode: 'TR 13',
    weight: 1.2,
    flatWidth: '166',
    type: 'light truck - Radial'
  },
  {
    size: '7.00 R 16',
    valveCode: 'TR 13',
    weight: 1.6,
    flatWidth: '212',
    type: 'light truck - Radial'
  },
  {
    size: '7.00‐15',
    valveCode: 'TR 75 A',
    weight: 1.3,
    flatWidth: '196',
    type: 'truck/bus - Bias'
  },
  {
    size: '7.50‐15',
    valveCode: 'TR 75 A',
    weight: 1.38,
    flatWidth: '196',
    type: 'truck/bus - Bias'
  },
  {
    size: '8.15‐15',
    valveCode: 'TR 75 A',
    weight: 1.75,
    flatWidth: '242',
    type: 'truck/bus - Bias'
  },
  {
    size: '8.25‐15 (28.9‐15)',
    valveCode: 'TR 75 A',
    weight: 1.75,
    flatWidth: '242',
    type: 'truck/bus - Bias'
  },
  {
    size: '7.00‐16',
    valveCode: 'TR 75 A',
    weight: 1.6,
    flatWidth: '212',
    type: 'truck/bus - Bias'
  },
  {
    size: '7.50‐16',
    valveCode: 'TR 177 A',
    weight: 1.38,
    flatWidth: '220',
    type: 'truck/bus - Bias'
  },
  {
    size: '8.25‐20',
    valveCode: 'TR 175 A',
    weight: 2.4,
    flatWidth: '241',
    type: 'truck/bus - Bias'
  },
  {
    size: '9.00-20 E',
    valveCode: 'TR175 A',
    weight: 2.45,
    flatWidth: '241',
    type: 'truck/bus - Bias'
  },
  {
    size: '9.00-20',
    valveCode: 'TR 175 A',
    weight: 2.8,
    flatWidth: '272',
    type: 'truck/bus - Bias'
  },
  {
    size: '9.00‐20',
    valveCode: 'TR 175 A',
    weight: 3,
    flatWidth: '272',
    type: 'truck/bus - Bias'
  },
  {
    size: '10.00‐20 E',
    valveCode: 'TR 78 A',
    weight: 2.6,
    flatWidth: '272',
    type: 'truck/bus - Bias'
  },
  {
    size: '10.00-20 E HD',
    valveCode: 'TR 78 A',
    weight: 3,
    flatWidth: '285',
    type: 'truck/bus - Bias'
  },
  {
    size: '10.00-20 REG',
    valveCode: 'TR 78 A',
    weight: 3.4,
    flatWidth: '285',
    type: 'truck/bus - Bias'
  },
  {
    size: '10.00‐20 HD',
    valveCode: 'TR 78 A',
    weight: 3.65,
    flatWidth: '285',
    type: 'truck/bus - Bias'
  },
  {
    size: '10.00-20 PREMIUM',
    valveCode: 'TR 78 A',
    weight: 4.05,
    flatWidth: '285',
    type: 'truck/bus - Bias'
  },
  {
    size: '10.5‐20',
    valveCode: 'TR 78 A',
    weight: 3.65,
    flatWidth: '285',
    type: 'truck/bus - Bias'
  },
  {
    size: '11.00-20 E',
    valveCode: 'TR 78 A',
    weight: 3.3,
    flatWidth: '285',
    type: 'truck/bus - Bias'
  },
  {
    size: '11.00-20 REG',
    valveCode: 'TR 78 A',
    weight: 3.65,
    flatWidth: '302',
    type: 'truck/bus - Bias'
  },
  {
    size: '11.00‐20 PREMIUM',
    valveCode: 'TR 78 A',
    weight: 3.9,
    flatWidth: '302',
    type: 'truck/bus - Bias'
  },
  {
    size: '11.00-20 HD',
    valveCode: 'TR 78 A',
    weight: 4.2,
    flatWidth: '302',
    type: 'truck/bus - Bias'
  },
  {
    size: '12.00-20 E',
    valveCode: 'TR 78 A',
    weight: 3.5,
    flatWidth: '311',
    type: 'truck/bus - Bias'
  },
  {
    size: '12.00-20 REG',
    valveCode: 'TR 78 A',
    weight: 4.1,
    flatWidth: '311',
    type: 'truck/bus - Bias'
  },
  {
    size: '12.00‐20 HD',
    valveCode: 'TR 78 A',
    weight: 4.4,
    flatWidth: '311',
    type: 'truck/bus - Bias'
  },
  {
    size: '11.00‐22',
    valveCode: 'TR 78 A',
    weight: 4.4,
    flatWidth: '311',
    type: 'truck/bus - Bias'
  },
  {
    size: '11.00‐22.5',
    valveCode: 'TR 78 A',
    weight: 4.44,
    flatWidth: '311',
    type: 'truck/bus - Bias'
  },
  {
    size: '12.00‐22.5',
    valveCode: 'TR 78 A',
    weight: 5.1,
    flatWidth: '329',
    type: 'truck/bus - Bias'
  },
  {
    size: '11.00‐24',
    valveCode: 'TR 78 A',
    weight: 4.1,
    flatWidth: '306',
    type: 'truck/bus - Bias'
  },
  {
    size: '12.00‐24',
    valveCode: 'TR 78 A',
    weight: 4.8,
    flatWidth: '343',
    type: 'truck/bus - Bias'
  },
  {
    size: '13.00‐24',
    valveCode: 'TR 179 A',
    weight: 6,
    flatWidth: '368',
    type: 'truck/bus - Bias'
  },
  {
    size: '14.00‐24',
    valveCode: 'TR 179 A',
    weight: 6.8,
    flatWidth: '368',
    type: 'truck/bus - Bias'
  },
  {
    size: '7.00 R 15',
    valveCode: 'TR 75 A',
    weight: 1.3,
    flatWidth: '196',
    type: 'truck/bus - Radial'
  },
  {
    size: '7.50 R 15',
    valveCode: 'TR 75 A',
    weight: 1.38,
    flatWidth: '196',
    type: 'truck/bus - Radial'
  },
  {
    size: '8.15 R 15',
    valveCode: 'TR 177 A',
    weight: 1.75,
    flatWidth: '242',
    type: 'truck/bus - Radial'
  },
  {
    size: '8.25 R 15',
    valveCode: 'TR 177 A',
    weight: 1.75,
    flatWidth: '242',
    type: 'truck/bus - Radial'
  },
  {
    size: '7.00 R 16',
    valveCode: 'TR 75 A',
    weight: 1.6,
    flatWidth: '212',
    type: 'truck/bus - Radial'
  },
  {
    size: '7.50 R 16',
    valveCode: 'TR 177 A',
    weight: 1.6,
    flatWidth: '220',
    type: 'truck/bus - Radial'
  },
  {
    size: '8.25 R 20',
    valveCode: 'TR 175 A',
    weight: 2.6,
    flatWidth: '241',
    type: 'truck/bus - Radial'
  },
  {
    size: '9.00 R 20',
    valveCode: 'TR 175 A',
    weight: 3,
    flatWidth: '272',
    type: 'truck/bus - Radial'
  },
  {
    size: '10.00 R 20',
    valveCode: 'TR 78 A',
    weight: 3.7,
    flatWidth: '285',
    type: 'truck/bus - Radial'
  },
  {
    size: '11.00 R 20',
    valveCode: 'TR 78 A',
    weight: 3.9,
    flatWidth: '302',
    type: 'truck/bus - Radial'
  },
  {
    size: '12.00 R 20',
    valveCode: 'TR 78 A',
    weight: 4.1,
    flatWidth: '311',
    type: 'truck/bus - Radial'
  },
  {
    size: '11.00 R 22',
    valveCode: 'TR 78 A',
    weight: 4.7,
    flatWidth: '311',
    type: 'truck/bus - Radial'
  },
  {
    size: '11.00 R 22.5',
    valveCode: 'TR 78 A',
    weight: 4.7,
    flatWidth: '311',
    type: 'truck/bus - Radial'
  },
  {
    size: '12.00 R 22.5',
    valveCode: 'TR 78 A',
    weight: 5.2,
    flatWidth: '329',
    type: 'truck/bus - Radial'
  },
  {
    size: '315/80 R 22.5',
    valveCode: 'V3-06-5',
    weight: 4.5,
    flatWidth: '311',
    type: 'truck/bus - Radial'
  },
  {
    size: '11.00 R 24',
    valveCode: 'TR 78 A',
    weight: 4.1,
    flatWidth: '311',
    type: 'truck/bus - Radial'
  },
  {
    size: '12.00 R 24',
    valveCode: 'TR 78 A',
    weight: 5.1,
    flatWidth: '343',
    type: 'truck/bus - Radial'
  },
  {
    size: '13.00 R 24',
    valveCode: 'TR 179 A',
    weight: 6,
    flatWidth: '368',
    type: 'truck/bus - Radial'
  },
  {
    size: '14.00 R 24',
    valveCode: 'TR 179 A',
    weight: 6.8,
    flatWidth: '368',
    type: 'truck/bus - Radial'
  },
  {
    size: '18X7-8/4.00-8/5.00-8',
    valveCode: 'JS2',
    weight: 0.5,
    flatWidth: '114',
    type: 'industrial / forklift / otr'
  },
  {
    size: '5.00-8',
    valveCode: 'TR87',
    weight: 0.5,
    flatWidth: '114',
    type: 'industrial / forklift / otr'
  },
  {
    size: '6.00‐9',
    valveCode: 'JS2',
    weight: 0.85,
    flatWidth: '171',
    type: 'industrial / forklift / otr'
  },
  {
    size: '6.90-9',
    valveCode: 'TR87',
    weight: 0.85,
    flatWidth: '171',
    type: 'industrial / forklift / otr'
  },
  {
    size: '6.00‐9',
    valveCode: 'TR75A',
    weight: 0.95,
    flatWidth: '171',
    type: 'industrial / forklift / otr'
  },
  {
    size: '6.50‐10',
    valveCode: 'JS2',
    weight: 0.95,
    flatWidth: '181',
    type: 'industrial / forklift / otr'
  },
  {
    size: '6.50‐10',
    valveCode: 'TR75A',
    weight: 0.95,
    flatWidth: '181',
    type: 'industrial / forklift / otr'
  },
  {
    size: '6.00‐12',
    valveCode: 'TR13',
    weight: 0.8,
    flatWidth: '153',
    type: 'industrial / forklift / otr'
  },
  {
    size: '7.00-12',
    valveCode: 'JS2',
    weight: 1.1,
    flatWidth: '198',
    type: 'industrial / forklift / otr'
  },
  {
    size: '7.00‐12',
    valveCode: 'TR 75 A',
    weight: 1.2,
    flatWidth: '198',
    type: 'industrial / forklift / otr'
  },
  {
    size: '7.00‐15',
    valveCode: 'TR 75A, TR 177A',
    weight: 1.3,
    flatWidth: '195',
    type: 'industrial / forklift / otr'
  },
  {
    size: '7.00L‐15',
    valveCode: 'TR75A, TR 177A',
    weight: 1.3,
    flatWidth: '195',
    type: 'industrial / forklift / otr'
  },
  {
    size: '7.50‐15',
    valveCode: 'TR 75A, TR 177A',
    weight: 1.3,
    flatWidth: '195',
    type: 'industrial / forklift / otr'
  },
  {
    size: '8.25‐15',
    valveCode: 'TR75A, TR 177A',
    weight: 1.75,
    flatWidth: '242',
    type: 'industrial / forklift / otr'
  },
  {
    size: '8.15-15 (28.9-15)',
    valveCode: 'TR75A, TR 177A',
    weight: 1.75,
    flatWidth: '242',
    type: 'industrial / forklift / otr'
  },
  {
    size: '8.25‐20',
    valveCode: 'TR 177 A, TR 175 A',
    weight: 2.4,
    flatWidth: '241',
    type: 'industrial / forklift / otr'
  },
  {
    size: '9.00‐20',
    valveCode: 'TR 175 A',
    weight: 3,
    flatWidth: '276',
    type: 'industrial / forklift / otr'
  },
  {
    size: '10.00‐20',
    valveCode: 'TR 78 A',
    weight: 3.65,
    flatWidth: '285',
    type: 'industrial / forklift / otr'
  },
  {
    size: '10.5‐20',
    valveCode: 'TR 218 A',
    weight: 3.8,
    flatWidth: '285',
    type: 'industrial / forklift / otr'
  },
  {
    size: '12.5‐20',
    valveCode: 'TR 218 A',
    weight: 4.1,
    flatWidth: '311',
    type: 'industrial / forklift / otr'
  },
  {
    size: '11.00‐20',
    valveCode: 'TR 78 A',
    weight: 3.9,
    flatWidth: '302',
    type: 'industrial / forklift / otr'
  },
  {
    size: '12.00‐20',
    valveCode: 'TR 78 A',
    weight: 4.1,
    flatWidth: '311',
    type: 'industrial / forklift / otr'
  },
  {
    size: '12.00‐20',
    valveCode: 'TR 179 A',
    weight: 4.1,
    flatWidth: '311',
    type: 'industrial / forklift / otr'
  },
  {
    size: '14.00‐24',
    valveCode: 'TRJ1175C',
    weight: 6.8,
    flatWidth: '368',
    type: 'industrial / forklift / otr'
  },
  {
    size: '4.00‐12',
    valveCode: 'TR 13',
    weight: 0.55,
    flatWidth: '131',
    type: 'farm and implement'
  },
  {
    size: '6.70‐15',
    valveCode: 'TR 15',
    weight: 1,
    flatWidth: '156',
    type: 'farm and implement'
  },
  {
    size: '6.00-15',
    valveCode: 'TR 218 A',
    weight: 1.15,
    flatWidth: '180',
    type: 'farm and implement'
  },
  {
    size: '9.00-15',
    valveCode: 'TR 15',
    weight: 2.6,
    flatWidth: '300',
    type: 'farm and implement'
  },
  {
    size: '10.0/75-15.3',
    valveCode: 'TR 15',
    weight: 2.6,
    flatWidth: '300',
    type: 'farm and implement'
  },
  {
    size: '10.0/75-15.3',
    valveCode: 'TR 218A',
    weight: 2.6,
    flatWidth: '300',
    type: 'farm and implement'
  },
  {
    size: '11.5/80-15.3',
    valveCode: 'TR 15',
    weight: 2.6,
    flatWidth: '300',
    type: 'farm and implement'
  },
  {
    size: '11.5/80-15.3',
    valveCode: 'TR 218 A',
    weight: 2.6,
    flatWidth: '300',
    type: 'farm and implement'
  },
  {
    size: '12.5/80-15.3',
    valveCode: 'TR 218 A',
    weight: 2.6,
    flatWidth: '300',
    type: 'farm and implement'
  },
  {
    size: '6.00/6.50‐16',
    valveCode: 'TR 15',
    weight: 1.05,
    flatWidth: '166',
    type: 'farm and implement'
  },
  {
    size: '9.00/10.00‐16',
    valveCode: 'TR 15',
    weight: 2.6,
    flatWidth: '276',
    type: 'farm and implement'
  },
  {
    size: '10.5-16',
    valveCode: 'TR218A',
    weight: 2.6,
    flatWidth: '276',
    type: 'farm and implement'
  },
  {
    size: '7.50-18',
    valveCode: 'TR 15',
    weight: 1.6,
    flatWidth: '200',
    type: 'farm and implement'
  },
  {
    size: '7.50-18',
    valveCode: 'TR 218A',
    weight: 1.6,
    flatWidth: '200',
    type: 'farm and implement'
  },
  {
    size: '7.50-18',
    valveCode: 'V3-04-10',
    weight: 1.6,
    flatWidth: '200',
    type: 'farm and implement'
  },
  {
    size: '10.0/80-18',
    valveCode: 'TR 15',
    weight: 2.6,
    flatWidth: '293',
    type: 'farm and implement'
  },
  {
    size: '10.0/80-18',
    valveCode: 'TR 218A',
    weight: 2.6,
    flatWidth: '293',
    type: 'farm and implement'
  },
  {
    size: '10.5/12.5/80‐18',
    valveCode: 'TR 218 A',
    weight: 2.7,
    flatWidth: '293',
    type: 'farm and implement'
  },
  {
    size: '12.5/14.5/80-18',
    valveCode: 'TR 218 A',
    weight: 2.7,
    flatWidth: '293',
    type: 'farm and implement'
  },
  {
    size: '12.5/14.5/80-18',
    valveCode: 'TR 15',
    weight: 2.7,
    flatWidth: '293',
    type: 'farm and implement'
  },
  {
    size: '13.0/65-18',
    valveCode: 'TR 15',
    weight: 2.8,
    flatWidth: '293',
    type: 'farm and implement'
  },
  {
    size: '13.0/75-18',
    valveCode: 'TR 218 A',
    weight: 2.8,
    flatWidth: '293',
    type: 'farm and implement'
  },
  {
    size: '5.00‐19',
    valveCode: 'TR 15',
    weight: 1.05,
    flatWidth: '144',
    type: 'farm and implement'
  },
  {
    size: '6.00‐19',
    valveCode: 'TR 15',
    weight: 1.2,
    flatWidth: '168',
    type: 'farm and implement'
  },
  {
    size: '7.00‐19',
    valveCode: 'TR 15',
    weight: 1.5,
    flatWidth: '202',
    type: 'farm and implement'
  },
  {
    size: '7.00/8.00‐19',
    valveCode: 'TR 15',
    weight: 1.6,
    flatWidth: '204',
    type: 'farm and implement'
  },
  {
    size: '6.50-20',
    valveCode: 'TR 15',
    weight: 1.6,
    flatWidth: '189',
    type: 'farm and implement'
  },
  {
    size: '7.00/7.50-20',
    valveCode: 'TR 13',
    weight: 1.8,
    flatWidth: '189',
    type: 'farm and implement'
  },
  {
    size: '7.50-20',
    valveCode: 'TR 15',
    weight: 1.8,
    flatWidth: '189',
    type: 'farm and implement'
  },
  {
    size: '8.00/9.5-20',
    valveCode: 'TR218A',
    weight: 2.8,
    flatWidth: '276',
    type: 'farm and implement'
  },
  {
    size: '10.5/80‐20 / 10.5‐20',
    valveCode: 'TR 218 A',
    weight: 2.8,
    flatWidth: '285',
    type: 'farm and implement'
  },
  {
    size: '10.5/80-20',
    valveCode: 'V3-06-8',
    weight: 3.65,
    flatWidth: '285',
    type: 'farm and implement'
  },
  {
    size: '12.5/80-20',
    valveCode: 'TR218 A',
    weight: 3.65,
    flatWidth: '311',
    type: 'farm and implement'
  },
  {
    size: '12.5/80-20',
    valveCode: 'TR218A',
    weight: 3.65,
    flatWidth: '311',
    type: 'farm and implement'
  },
  {
    size: '8.3/9.5-24',
    valveCode: 'TR218A',
    weight: 2.7,
    flatWidth: '252',
    type: 'farm and implement'
  },
  {
    size: '9.5‐24',
    valveCode: 'TR 218 A',
    weight: 2.7,
    flatWidth: '252',
    type: 'farm and implement'
  },
  {
    size: '12.4‐24/11‐24/320/70 R 24',
    valveCode: 'TR 218 A',
    weight: 3.7,
    flatWidth: '306',
    type: 'farm and implement'
  },
  {
    size: '13.6‐24/12‐24',
    valveCode: 'TR 218 A',
    weight: 5.7,
    flatWidth: '343',
    type: 'farm and implement'
  },
  {
    size: '11.2‐28',
    valveCode: 'TR 218 A',
    weight: 4.2,
    flatWidth: '327',
    type: 'farm and implement'
  },
  {
    size: '12.4‐28',
    valveCode: 'TR 218 A',
    weight: 4.2,
    flatWidth: '327',
    type: 'farm and implement'
  },
  {
    size: '12.4‐28/320/70 R 28',
    valveCode: 'TR 218 A',
    weight: 4.5,
    flatWidth: '328',
    type: 'farm and implement'
  },
  {
    size: '13.6‐28/12‐28',
    valveCode: 'TR 218 A',
    weight: 4.7,
    flatWidth: '328',
    type: 'farm and implement'
  },
  {
    size: '14.9‐28',
    valveCode: 'TR 218 A',
    weight: 5.5,
    flatWidth: '394',
    type: 'farm and implement'
  },
  {
    size: '14.9/13‐28',
    valveCode: 'TR 218 A',
    weight: 5.5,
    flatWidth: '394',
    type: 'farm and implement'
  },
  {
    size: '16.9‐28/14‐28',
    valveCode: 'TR 218 A',
    weight: 6.8,
    flatWidth: '426',
    type: 'farm and implement'
  },
  {
    size: '14‐28/420/70 R 28',
    valveCode: 'TR 218 A',
    weight: 5.7,
    flatWidth: '394',
    type: 'farm and implement'
  },
  {
    size: '14.9-15-30',
    valveCode: 'TR 218 A',
    weight: 6.5,
    flatWidth: '430',
    type: 'farm and implement'
  },
  {
    size: '16.9/14‐30',
    valveCode: 'TR 218 A',
    weight: 7.1,
    flatWidth: '430',
    type: 'farm and implement'
  },
  {
    size: '16.9-30',
    valveCode: 'TR218A',
    weight: 7.1,
    flatWidth: '430',
    type: 'farm and implement'
  },
  {
    size: '18.4/15‐30, 520/70 R 30',
    valveCode: 'TR 218 A',
    weight: 7.6,
    flatWidth: '461',
    type: 'farm and implement'
  },
  {
    size: '18.4‐30',
    valveCode: 'TR 218 A',
    weight: 7.8,
    flatWidth: '461',
    type: 'farm and implement'
  },
  {
    size: '12.00‐24',
    valveCode: 'V3‐06‐5',
    weight: 4.8,
    flatWidth: '343',
    type: 'heavy otr'
  },
  {
    size: '13.6/14.9-24',
    valveCode: 'TR218A',
    weight: 4.2,
    flatWidth: '343',
    type: 'heavy otr'
  },
  {
    size: '13.00-24',
    valveCode: 'TR220',
    weight: 4.2,
    flatWidth: '343',
    type: 'heavy otr'
  },
  {
    size: '14.9‐24',
    valveCode: 'TR218A',
    weight: 4.2,
    flatWidth: '343',
    type: 'heavy otr'
  },
  {
    size: '15./80-24, 16.5/85-24',
    valveCode: 'TR218A',
    weight: 4.2,
    flatWidth: '343',
    type: 'heavy otr'
  },
  {
    size: '16.9-24',
    valveCode: 'TR218A',
    weight: 6,
    flatWidth: '421',
    type: 'heavy otr'
  },
  {
    size: '16.0/70-24',
    valveCode: 'TR218A',
    weight: 6,
    flatWidth: '421',
    type: 'heavy otr'
  },
  {
    size: '17.5-24',
    valveCode: 'TR218A',
    weight: 6.5,
    flatWidth: '421',
    type: 'heavy otr'
  },
  {
    size: '18.4-24',
    valveCode: 'TR218A',
    weight: 6.5,
    flatWidth: '421',
    type: 'heavy otr'
  },
  {
    size: '420-460/70-24',
    valveCode: 'TR218A',
    weight: 6.5,
    flatWidth: '421',
    type: 'heavy otr'
  },
  {
    size: '13.00/14.00‐24',
    valveCode: 'TRJ1175',
    weight: 6,
    flatWidth: '368',
    type: 'heavy otr'
  },
  {
    size: '14.00‐24/25 HD',
    valveCode: 'SP1000+TRJ1175C',
    weight: 6.8,
    flatWidth: '368',
    type: 'heavy otr'
  },
  {
    size: '15.5‐25',
    valveCode: 'TRJ1175',
    weight: 7.1,
    flatWidth: '375',
    type: 'heavy otr'
  },
  {
    size: '16.5-25',
    valveCode: 'TR179A EXT.',
    weight: 7.1,
    flatWidth: '505',
    type: 'heavy otr'
  },
  {
    size: '17.00‐25',
    valveCode: 'TRJ1175',
    weight: 8.1,
    flatWidth: '505',
    type: 'heavy otr'
  },
  {
    size: '17.5‐25',
    valveCode: 'TRJ1175',
    weight: 8.1,
    flatWidth: '505',
    type: 'heavy otr'
  },
  {
    size: '18.00‐25',
    valveCode: 'TRJ1175',
    weight: 9.1,
    flatWidth: '505',
    type: 'heavy otr'
  },
  {
    size: '23.5‐25',
    valveCode: 'TRJ1175',
    weight: 10.4,
    flatWidth: '580',
    type: 'heavy otr'
  },
  {
    size: '26.5‐25',
    valveCode: 'TRJ1175',
    weight: 12.5,
    flatWidth: '580',
    type: 'heavy otr'
  },
  {
    size: '23.1‐26',
    valveCode: 'TRJ1175',
    weight: 12.5,
    flatWidth: '580',
    type: 'heavy otr'
  },
  {
    size: '16.9/18-34',
    valveCode: 'TR218A',
    weight: 9.5,
    flatWidth: '513',
    type: 'heavy otr'
  },
  {
    size: '18.4‐34',
    valveCode: 'TR218A',
    weight: 9.5,
    flatWidth: '513',
    type: 'heavy otr'
  },
  {
    size: '20.8-34',
    valveCode: 'TR218A',
    weight: 9.5,
    flatWidth: '513',
    type: 'heavy otr'
  },
  {
    size: '600/65-34',
    valveCode: 'TR218A',
    weight: 9.5,
    flatWidth: '513',
    type: 'heavy otr'
  },
  {
    size: '11.2/12.4‐36',
    valveCode: 'TR218A',
    weight: 6.1,
    flatWidth: '340',
    type: 'heavy otr'
  },
  {
    size: '12.4/13.6-36',
    valveCode: 'TR218A',
    weight: 6.2,
    flatWidth: '340',
    type: 'heavy otr'
  },
  {
    size: '13.6/12-38',
    valveCode: 'TR218A',
    weight: 6.4,
    flatWidth: '399',
    type: 'heavy otr'
  },
  {
    size: '15.5-38',
    valveCode: 'TR218A',
    weight: 6.7,
    flatWidth: '399',
    type: 'heavy otr'
  },
  {
    size: '16.9/14-38',
    valveCode: 'TR218A',
    weight: 6.7,
    flatWidth: '399',
    type: 'heavy otr'
  },
  {
    size: '650/60-38',
    valveCode: 'TR218A',
    weight: 6.7,
    flatWidth: '399',
    type: 'heavy otr'
  },
  {
    size: '710/70-38, 650/85-38',
    valveCode: 'TR218A NARROW',
    weight: 6.7,
    flatWidth: '399',
    type: 'heavy otr'
  },
  {
    size: '15.5‐38',
    valveCode: 'TR218A',
    weight: 6.4,
    flatWidth: '399',
    type: 'heavy otr'
  },
  {
    size: '16.9‐38',
    valveCode: 'TR218A',
    weight: 6.7,
    flatWidth: '399',
    type: 'heavy otr'
  },
  {
    size: '18.4‐38',
    valveCode: 'TR218A',
    weight: 9.3,
    flatWidth: '461',
    type: 'heavy otr'
  },
  {
    size: '20.8-38',
    valveCode: 'TR218A',
    weight: 9.3,
    flatWidth: '461',
    type: 'heavy otr'
  }
];

export default data;
