// import React from 'react';
import React, { useState } from 'react';
import YouTube from 'react-youtube';

interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

// Sample data - replace with actual videos from Supabase
const videos: Video[] = [
  {
    id: '1',
    title: 'பிரதோஷ சிவநாயன்மார் உரை',
    youtubeId: 'XRH3lVAtFQc'
  },
  {
    id: '2',
    title: 'சிறப்பு பூஜை',
    youtubeId: 'Ae9E0XdTiGk'
  },
  {
    id: '1',
    title: 'மாமுனிவரின் மாண்பிற்கோர் முகவுரை',
    youtubeId: '4rUBOkxMIpQ'
  },
{
    id: '2',
    title: 'பக்திப்பயிரின் வித்தும் வேர்களும்',
    youtubeId: '2EIO88gbm0Y'
  },
{
    id: '3',
    title: 'அகம் ஒளி தந்திட்ட அகரம் சிப்பந்தி',
    youtubeId: 'pqhEeIrkBcY'
  },
{
    id: '4',
    title: 'முக்திக்கு வித்திட்ட திருவண்ணாமலை',
    youtubeId: 'VSW2b7Przz8'
  },
{
    id: '5',
    title: 'தானே வரும்',
    youtubeId: 'RChpcOfGkAM'
  },
{
    id: '6',
    title: 'தானே ஸ்புரிக்கும்',
    youtubeId: 'KvYDdJ-FDQQ'
  },
{
    id: '7',
    title: 'சரணடைய அருள் செய்த தந்தையின் மந்திரம்',
    youtubeId: 'njEvEWd9fI0'
  },
{
    id: '8',
    title: 'சேலத்தில் கனிந்த பக்தி பழம்',
    youtubeId: 'MLYrr3Rto18'
  },
{
    id: '9',
    title: 'ஆன்மிக ஆலமரம்',
    youtubeId: 'VFJ01_fd0c0'
  },
{
    id: '10',
    title: 'ஆரம்பகால ஆராதனை',
    youtubeId: '-ycYLLsEWYY'
  },
{
    id: '11',
    title: 'நாயன்மார் நிலையில் நல்ல ரிப்போர்ட்',
    youtubeId: 'BJ4saCXxSwU'
  },
{
    id: '12',
    title: 'கன்று பட்னி இருந்தால் பசுவிற்கு பசிக்கிறது',
    youtubeId: '6bFTumP6wko'
  },
{
    id: '13',
    title: 'கூறும் அடியார்கள் வினை தீர்க்கும் உத்தமன்',
    youtubeId: 'P5zimO6IK-8'
  },
{
    id: '14',
    title: 'மெட்ராஸ் போ',
    youtubeId: 'SSorIFKqkjA'
  },
{
    id: '15',
    title: 'எழுமூர் அருளிய எல்லையில்லா கருணாகரன்',
    youtubeId: 'VOz175YdsaI'
  },
{
    id: '16',
    title: 'அந்த ஆபீசர் என்ன ஆனார்',
    youtubeId: 'yanqZ_4MlTU'
  },
{
    id: '17',
    title: 'அவன் அவனிடம் நீ என்னிடம்',
    youtubeId: 'WdcbZ7abdjE'
  },
{
    id: '18',
    title: 'வேலூர் வேண்டாம்',
    youtubeId: '2a7CpCeL0_A'
  },
{
    id: '19',
    title: 'சேலம் செல்லாதே',
    youtubeId: '7ffWkUNuSls'
  },
{
    id: '20',
    title: 'தடையை தகர்த்த தயாளன்',
    youtubeId: 'abh-errRKQM'
  },
{
    id: '21',
    title: 'லௌகீகங்களை அவா பாத்துப்பா',
    youtubeId: 'xn4eLWZg4kM'
  },
{
    id: '22',
    title: 'GM ஆகலாமான்னு கேளு',
    youtubeId: '8zbwUYHY-co'
  },
{
    id: '23',
    title: 'நான் பாத்துக்கறேன்',
    youtubeId: 'GyH_uglmZf4'
  },
{
    id: '24',
    title: 'உம்மாச்சியின் கண்ணாமூச்சி விளையாட்டு',
    youtubeId: 'mFp-Z_6JAZI'
  },
{
    id: '25',
    title: 'நினைவில் வை நான் வைத்தியநாதனென்று',
    youtubeId: 'g8xRsdgzUPI'
  },
{
    id: '26',
    title: 'அருணாசல சிவன்',
    youtubeId: 'fFPlF683eMk'
  },
{
    id: '27',
    title: 'ஜம்புலிங்கம்',
    youtubeId: '5dim1g1A_X4'
  },
{
    id: '28',
    title: 'பிக்க்ஷண்டார்',
    youtubeId: 'qY-NZuIpeBw'
  },
{
    id: '29',
    title: 'சோமாஸ்கந்தர் கேட்ட சோமாசி',
    youtubeId: 'tSy9PbYie3k'
  },
{
    id: '30',
    title: 'காட்சிக்கெளியோன் சுட்டிக்காட்டும் எதிர்கால காட்சிகள்',
    youtubeId: 'sUOhESx9St4'
  },
{
    id: '31',
    title: 'அவல்பொரியை ஆசையோடு பெற்ற அன்பன்',
    youtubeId: 'NzzWztgJPec'
  },
{
    id: '32',
    title: 'பார்த்தீங்களா எங்க பெரியவாளை',
    youtubeId: '8GpelC521SM'
  },
{
    id: '33',
    title: 'மாங்காய் கேட்ட மஹான்',
    youtubeId: 'rSTysAGdqOY'
  },
{
    id: '34',
    title: 'உனக்கு உடனே ட்ரெயின் கிடைக்குமா',
    youtubeId: 'fQtXbuG6dOY'
  },
{
    id: '35',
    title: 'வைதீஸ்வரரால் அனுப்பப்பட்ட வைத்தியர்',
    youtubeId: 'OtLPvZvrc9c'
  },
{
    id: '36',
    title: 'நிலைபெறுமாறு எண்ணுதியேல் நெஞ்சே',
    youtubeId: 'izMBRbkjtwo'
  },
{
    id: '37',
    title: 'புண்ய சுமையும் மனதின் பாரமும்',
    youtubeId: 'kdfj5QU68UE'
  },
{
    id: '38',
    title: 'அடிமையின் விரதத்திற்கு அங்கீகாரம்',
    youtubeId: 'LC1wtEcptz4'
  },
{
    id: '39',
    title: 'மங்களநாயகர் அருளிய மஞ்சளின் மகிமை',
    youtubeId: 'QFQ2CLNaF7Q'
  },
{
    id: '40',
    title: 'பரமேஸ்வரனும் நாராயணனும் அம்பாளும் நீயே',
    youtubeId: 'aGOED1ONC78'
  },
{
    id: '41',
    title: 'ஓம் நமோ ஹிரண்யபாஹவே நமஹ',
    youtubeId: '04S9kf1W8FU'
  },
{
    id: '42',
    title: 'சந்தன மூர்த்தியும் சதாரா தரிசனமும்',
    youtubeId: 'sk6iuNcSUGc'
  },
{
    id: '43',
    title: 'என்றும் எங்கும் நிறைந்திருக்கும் பரம்பொருள்',
    youtubeId: 'a0HKHDP7KIw'
  },
{
    id: '44',
    title: 'ரிஷிகளான குழந்தைகளை போய் பாத்துட்டு வா',
    youtubeId: '9Z-dyFjoUdM'
  },
{
    id: '45',
    title: 'உய்விக்கவே கர்ம அனுபவம்',
    youtubeId: 'ubUJyy-Zp98'
  },
{
    id: '46',
    title: 'பழியை தீர்த்த பரம கருணாமூர்த்தி',
    youtubeId: 'D0QaFn0k6TU'
  },
{
    id: '47',
    title: 'பேரின்ப வீடு',
    youtubeId: 'il7fdf9ObQ4'
  },
{
    id: '48',
    title: 'கிருகக்காரனின் கிரஹப்பிரவேசம்',
    youtubeId: 'qEVQuwv4xhE'
  },
{
    id: '49',
    title: 'முதல் விஜயம் - தாயை குழந்தையாய் கண்ட குருமுனி',
    youtubeId: 'pn8s8PSlkAc'
  },
{
    id: '50',
    title: 'இரண்டாம் விஜயம் - கர்பகிரஹம் காட்டிய பிரவேசம்',
    youtubeId: 'nAphEeWEgZY'
  },
  {
    id: '51',
    title: 'மூன்றாம் விஜயம் - மாலை மதி',
    youtubeId: 'dovHHUKywAc'
  },
{
    id: '52',
    title: 'யாரொருவர் எவ்வண்ணம் ஆட்கொள்வர்',
    youtubeId: '6TWZpCEl-JI'
  },
{
    id: '53',
    title: 'வந்தாச்சா வந்தாச்சா எனும் வாஞ்சை',
    youtubeId: '0MZpfDpAVM4'
  },
{
    id: '54',
    title: 'வைபவ மூர்த்தியின் ஜெயந்தி அனுபவங்கள்',
    youtubeId: 'Ii4CsD0VEkA'
  },
{
    id: '55',
    title: 'ஜெயந்தியை சுருக்கிட்டையோ',
    youtubeId: 'ejVgJ88HSKI'
  },
{
    id: '56',
    title: 'கேட்டதும் கிடைக்கும் நினைத்ததும் நடக்கும்',
    youtubeId: 'GE0RtKswoJg'
  },
{
    id: '57',
    title: 'பால் நினைதூட்டும் தாயினும் மேலோன்',
    youtubeId: 'tsuBHtbHQbg'
  },
{
    id: '58',
    title: 'அடிமைக்கு அருளிய முருகனடிமை',
    youtubeId: 'OEoVBaxa8is'
  },
{
    id: '59',
    title: 'தேரின் உயரம் சொன்ன உலகளந்த உத்தமன்',
    youtubeId: 'N_f8ZDNyKlo'
  },
{
    id: '60',
    title: 'நான் வந்தபோது கட்சிக்காரா வழி விட்டாளாமே',
    youtubeId: 'NbK8ZL_nmtA'
  },
{
    id: '61',
    title: 'காஞ்சியில் ஜெயந்தி கோலாகலங்கள்',
    youtubeId: 'M_ej-BVyvjo'
  },
{
    id: '62',
    title: 'உச்சியிலிருந்து பக்தர்களை காத்தவன்',
    youtubeId: '6eNO0IiVzRw'
  },
{
    id: '63',
    title: 'கொடை வள்ளலின் குடை',
    youtubeId: '2H7TCJZJwmU'
  },
{
    id: '64',
    title: 'அபேத மூர்த்தி',
    youtubeId: 'lTWWr0vawZc'
  },
{
    id: '65',
    title: 'மனோரத முத்திரை மூர்த்தி',
    youtubeId: 'isolTD4xSig'
  },
{
    id: '66',
    title: 'மலர் சூடிய பிறைசூடி',
    youtubeId: 'Cg9uR9DIqxQ'
  },
{
    id: '67',
    title: 'தயாசிந்து தானே தொடங்கி வைத்த தானம்',
    youtubeId: 'IIk32S2X-PY'
  },
{
    id: '68',
    title: 'மகானால் தொடரப்பட்ட மானசீக பூஜை',
    youtubeId: 'CIcMXjwRvJM'
  },
{
    id: '69',
    title: 'விஷ்வேஸ்வரர் விரும்பி ஏற்ற வில்வமாலை',
    youtubeId: 'EJzcFI7qB8c'
  },
{
    id: '70',
    title: 'விஷ்வேஸ்வரர் விரும்பி ஏற்ற வில்வமாலை',
    youtubeId: 'EJzcFI7qB8c'
  },
{
    id: '71',
    title: 'தேடி வரும் அனுக்ரஹம்',
    youtubeId: 'mWbL1AI4hAw'
  },
{
    id: '72',
    title: 'புண்ய ஸ்வரூபரின் மனதில் இடம்பிடித்திடும் புண்யம் பெற்றவர்கள்',
    youtubeId: 'ZRhOzSQTM-Q'
  },
{
    id: '73',
    title: 'அகிலாண்டகோடி நாயகருக்கு அனந்தகோடி ப்ரதக்ஷிண நமஸ்காரங்கள்',
    youtubeId: 'BuH2OViqUIw'
  },
{
    id: '74',
    title: 'தானே உணர்த்தி பாட சொன்ன தேவாரம்',
    youtubeId: 'bFcn83fOsOw'
  },
{
    id: '75',
    title: 'மாங்கல்ய பிச்சை அருளிய மங்களநாதன்',
    youtubeId: 'yu3J62b7uBE'
  },
{
    id: '76',
    title: 'கை கொடுக்கும் கைங்கர்யம்',
    youtubeId: 'lTVAvGkVd5U'
  },
{
    id: '77',
    title: 'அருளாளன் அடிமைக்கு அளித்த ஐம்பெரும் பொருள்கள்',
    youtubeId: 'W0N-OS5Wm8w'
  },
{
    id: '78',
    title: 'அலாதீன் அற்புதவிளக்கு',
    youtubeId: 'wCktV633_Mo'
  },
{
    id: '79',
    title: 'காருண்யன் வழங்கிய கற்பக விருக்க்ஷம்',
    youtubeId: 'crLHq4ZaCok'
  },
{
    id: '80',
    title: 'சங்கரன் நடத்திவைத்த சஷ்டியப்தபூர்த்தி',
    youtubeId: 'fJOoy8DfNks'
  },
{
    id: '81',
    title: 'சிக்கென பற்றிய சீரோன் கழல்கள்',
    youtubeId: 'gNc9p7T55Wk'
  },
{
    id: '82',
    title: 'தரிசனமும் ப்ரதக்ஷணமும்',
    youtubeId: 'Y41yiXSnUus'
  },
{
    id: '83',
    title: 'நமச்சிவாய வாழ்க நாதன்தாள் வாழ்க',
    youtubeId: 'xMj2hRsxhfw'
  },
{
    id: '84',
    title: 'மாலைமதியும் வீசுதென்றலும்',
    youtubeId: 'Erlwsw7Fy9w'
  },
{
    id: '85',
    title: 'வினைதீர்க்க விழையும் வித்தகர்',
    youtubeId: 'o8av5pAlAKw'
  },
{
    id: '86',
    title: 'அளவில்லா உயர்வு பெற்ற அடைமொழி',
    youtubeId: 'gxD1s1hpcrY'
  },
{
    id: '87',
    title: '68ஆம் பீடாதிபதியும் 64ஆம் நாயன்மாரும்',
    youtubeId: '8IdnGYPfAYM'
  },
{
    id: '88',
    title: 'இவாளை சேர்த்த இன்பமயம்',
    youtubeId: 'tBXdHH2r3X0'
  },
{
    id: '89',
    title: 'நானேயோ தவம் செய்தேன்',
    youtubeId: 'gJfqnu2JvpY'
  },
{
    id: '90',
    title: 'தந்தது உன்தன்னை கொண்டது என்தன்னை',
    youtubeId: 'zu79sycZEuI'
  },
{
    id: '91',
    title: 'நான்தானே போட்டுக்க சொன்னேன்',
    youtubeId: '3a_Jwu0V6qc'
  },
{
    id: '92',
    title: 'நான்தானே ஏற்பாடு பண்ணிருந்தேன்',
    youtubeId: '8kW1yVNVcMI'
  },
{
    id: '93',
    title: 'நான்தானே வாங்கி தந்தேன்',
    youtubeId: 'T0r8YoHozWs'
  },
{
    id: '94',
    title: 'நான்தானே செய்ய சொன்னேன்',
    youtubeId: '1MKAobF8lK4'
  },
{
    id: '95',
    title: 'மற்றொரு அங்கீகாரம்',
    youtubeId: 'Y9hoSBl3cuE'
  },
{
    id: '96',
    title: 'ப்ரஹ்ம ஞானியின் கனவு',
    youtubeId: 'pUBEnP-jXvU'
  },
{
    id: '97',
    title: 'அம்பிகை நான் காளிதாசன் நீ',
    youtubeId: 'AHXqO6DzDYk'
  },
{
    id: '98',
    title: 'அடிமையின் அதீத அனுபவங்கள்',
    youtubeId: '-jdMwMVjU4M'
  },
{
    id: '99',
    title: 'நித்யமூர்த்தி',
    youtubeId: '0K2tUBclA8M'
  },
{
    id: '100',
    title: 'திருக்கோவில்',
    youtubeId: 'lhVUWo5jrcM'
  },
  {
    id: '101',
    title: 'குடிமுழுவதும் ஆளும் குணாளன்',
    youtubeId: 'EjbPoGkq2m0'
  },
{
    id: '102',
    title: 'ஆராதனை இன்பம் அருளும் மலை போற்றி',
    youtubeId: 'q0UOtC8MwYc'
  },
{
    id: '103',
    title: 'ஆராதனை அனுபவங்கள்',
    youtubeId: 'LnL_Gg39ipA'
  },
{
    id: '104',
    title: 'மூலவரும் உற்சவரும்',
    youtubeId: '31dDxbWqWbs'
  },
{
    id: '105',
    title: 'அடிமையின் உன்னத மனோரதம்',
    youtubeId: 'Io6PuNt03lU'
  },
{
    id: '106',
    title: 'பெரும்கோயில்',
    youtubeId: 'Ufl8JoG1-1Q'
  },
{
    id: '107',
    title: 'நிகரில்லா பாக்கியம் பெற்ற கோயில் நிலம்',
    youtubeId: 'UtjCAH0lE4k'
  },
{
    id: '108',
    title: 'இயற்கையின் அங்கீகாரம்',
    youtubeId: '_mVuJH1Iq08'
  },
{
    id: '109',
    title: 'பெரும்கோயில் பாக்கியம் கண்ட கற்கள்',
    youtubeId: 'y-BsVr-OaG4'
  },
{
    id: '110',
    title: 'ஆலய நிலத்தில் அருளாளருக்கு அதிருத்ரம்',
    youtubeId: 'FhdhmusDMeM'
  },
{
    id: '111',
    title: 'பெரும்கோயில் சங்கல்பம்',
    youtubeId: '1pmriFRF0UQ'
  },
{
    id: '112',
    title: 'கோயில் உருவாக பிரார்த்தித்து வைபவங்கள்',
    youtubeId: 'k7XFWgX2dNc'
  },
{
    id: '113',
    title: 'ஸ்ரீ ஸ்ரீ ஸ்ரீ மஹா பெரியவாளின் ஓரிக்கை திருக்கோயில் திருப்பதிகம்',
    youtubeId: 'VgveZptia6Q'
  },
{
    id: '114',
    title: 'மஹாலக்ஷ்மி தாயாரின் திருப்பெயரில் டிரஸ்ட்',
    youtubeId: 'IyPU_JZUO8Y'
  },
{
    id: '115',
    title: 'அவன் அருளாலேயே ஆக்கம்பெறும் பெரும்கோயில்',
    youtubeId: 'XtH2uSyl24A'
  },
{
    id: '116',
    title: 'ஸ்ரீ ஸ்ரீ ஸ்ரீ மஹா பெரியவாளின் ஓரிக்கை திருக்கோயில் வேண்டல்பதிகம்',
    youtubeId: 'BjxcAm83qrU'
  },
{
    id: '117',
    title: 'முடிவில்லா ப்ரஹ்ம ஞானி',
    youtubeId: 'vUndpV0pkBQ'
  },
{
    id: '118',
    title: 'மிக உயர்ந்த மஹான்',
    youtubeId: 'I7QAHhBiSRI'
  },
{
    id: '119',
    title: 'மோக்க்ஷ சாம்ராஜ்யம்',
    youtubeId: 'mPqewNTNqKg'
  },
{
    id: '120',
    title: 'தனை ஈந்த ஈசன் விட்ட வில்வ மாலை தூது',
    youtubeId: 'drGapOO2N7Q'
  },
{
    id: '121',
    title: 'பிரதோஷம் பொண்ணு மட்டும்தான் தெரியறது',
    youtubeId: 'nBn6ZGs0Ccw'
  },
{
    id: '122',
    title: 'காஞ்சியில் தியாகராஜர்',
    youtubeId: 'zXmBpP-q3PI'
  },
{
    id: '123',
    title: 'வருஷா வருஷம் வர்ஷிக்கும் அருள்',
    youtubeId: 'orwwotSYL6I'
  },
{
    id: '124',
    title: 'உயர்நோக்கங்களுடன் உருவாகிய உறவுப்பின்னல்கள்',
    youtubeId: '_xn2WsFIovs'
  },
{
    id: '125',
    title: 'நீயே பண்ணிவை',
    youtubeId: 'Xjl8D2usw-0'
  },
{
    id: '126',
    title: 'பெரியவா சொன்னா பண்ணிக்கறேன்',
    youtubeId: 'pjFB-305K40'
  },
{
    id: '127',
    title: 'காமாட்சி பெரியவா',
    youtubeId: 'G7S1wObEnTg'
  },
{
    id: '128',
    title: 'மாமாவின் மூலமாக உதித்த ஸ்ரீ பெரியவாளின் திருவாக்கு',
    youtubeId: 'RtzgwHxK2hQ'
  },
{
    id: '129',
    title: 'அவா ஏத்துப்பா',
    youtubeId: 'Eyb0ebzdyok'
  },
{
    id: '130',
    title: 'இமயத்தை எட்டிய அடிமையின் ஆணை',
    youtubeId: '9SaD-1pe2K8'
  },
{
    id: '131',
    title: '64ஆம் நாயன்மாரின் வாக்கின் மஹிமை',
    youtubeId: 'HT_IjQmM7TQ'
  },
{
    id: '132',
    title: 'அருட்கவிஞர் கிருஷ்ணமூர்த்தி',
    youtubeId: 'xETAi81-gMA'
  },
{
    id: '133',
    title: 'உங்காத்துல பெரியவா நுழைஞ்சாளே',
    youtubeId: 'Pt5wGVVPcMY'
  },
{
    id: '134',
    title: 'ஜீவன் முக்தர்',
    youtubeId: 'RpfmWX4Wtew'
  },
{
    id: '135',
    title: 'முடிவுரை',
    youtubeId: 'oOkLngS2gtw'
  }
];

function Videos() {
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 10;

  // Calculate the total number of pages
  const totalPages = Math.ceil(videos.length / videosPerPage);

  // Get videos for the current page
  const startIndex = (currentPage - 1) * videosPerPage;
  const currentVideos = videos.slice(startIndex, startIndex + videosPerPage);

  // Pagination handler
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold font-tamil text-orange-700 mb-4">
          காணொளிகள்
        </h1>
        <p className="text-gray-600 font-tamil">
          பிரதோஷ சிவநாயன்மார் அவர்களின் உரைகள் மற்றும் நிகழ்வுகள்
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentVideos.map(video => (
          <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <YouTube
                videoId={video.youtubeId}
                opts={{
                  width: '100%',
                  height: '150%',
                  playerVars: {
                    modestbranding: 1,
                    rel: 0
                  }
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-tamil text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
      

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          முந்தைய பக்கம்
        </button>
        <span className="text-gray-700 font-bold">
          பக்கம் {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          அடுத்த பக்கம்
        </button>
      </div>







    </div>
  );
}

export default Videos;