import Header from "@/components/header/Header";
import hanuman from "@/assets/images/hanuman.jpg";
import mahadev from "@/assets/images/mahadev.jpg";
import balaji from "@/assets/images/balaji.jpg";
import Card from "@/components/card/Card";
import Carousel from "@/components/carousel/Carousel";

export default function Home() {
  const imageSource1 = hanuman.src;
  const imageSource2 = mahadev.src;
  const imageSource3 = balaji.src;

  const hanumanArray = [
    "/assets/images/hanuman_chalisa/h1.png",
    "/assets/images/hanuman_chalisa/h2.png",
    "/assets/images/hanuman_chalisa/h3.png",
    "/assets/images/hanuman_chalisa/h4.png",
    "/assets/images/hanuman_chalisa/h5.png",
    "/assets/images/hanuman_chalisa/h6.png",
    "/assets/images/hanuman_chalisa/h7.png",
    "/assets/images/hanuman_chalisa/h8.png",
  ];
  const ganpati_sukhkarta_aarti = [
    "/assets/images/ganpatia1/g1.png",
    "/assets/images/ganpatia1/g2.png",
  ];
  const shanidev_aarti = [
    "/assets/images/shanidev_aarti/s1.png",
    "/assets/images/shanidev_aarti/s2.png",
    "/assets/images/shanidev_aarti/s3.png",
    "/assets/images/shanidev_aarti/s4.png",
    "/assets/images/shanidev_aarti/s5.png",
  ];
  const vishnu_sahas = [
    "/assets/images/vishnu_sahastranaam/v1.png",
    "/assets/images/vishnu_sahastranaam/v2.png",
    "/assets/images/vishnu_sahastranaam/v3.png",
    "/assets/images/vishnu_sahastranaam/v4.png",
    "/assets/images/vishnu_sahastranaam/v5.png",
    "/assets/images/vishnu_sahastranaam/v6.png",
    "/assets/images/vishnu_sahastranaam/v7.png",
    "/assets/images/vishnu_sahastranaam/v8.png",
    "/assets/images/vishnu_sahastranaam/v9.png",
    "/assets/images/vishnu_sahastranaam/v10.png",
    "/assets/images/vishnu_sahastranaam/v11.png",
    "/assets/images/vishnu_sahastranaam/v12.png",
    "/assets/images/vishnu_sahastranaam/v13.png",
    "/assets/images/vishnu_sahastranaam/v14.png",
    "/assets/images/vishnu_sahastranaam/v15.png",
    "/assets/images/vishnu_sahastranaam/v16.png",
    "/assets/images/vishnu_sahastranaam/v17.png",
    "/assets/images/vishnu_sahastranaam/v18.png",
    "/assets/images/vishnu_sahastranaam/v19.png",
    "/assets/images/vishnu_sahastranaam/v20.png",
    "/assets/images/vishnu_sahastranaam/v21.png",
    "/assets/images/vishnu_sahastranaam/v22.png",
    "/assets/images/vishnu_sahastranaam/v23.png",
    "/assets/images/vishnu_sahastranaam/v24.png",
    "/assets/images/vishnu_sahastranaam/v25.png",
    "/assets/images/vishnu_sahastranaam/v26.png",
    "/assets/images/vishnu_sahastranaam/v27.png",
    "/assets/images/vishnu_sahastranaam/v28.png",
    "/assets/images/vishnu_sahastranaam/v29.png",
    "/assets/images/vishnu_sahastranaam/v30.png",
    "/assets/images/vishnu_sahastranaam/v31.png",
    "/assets/images/vishnu_sahastranaam/v32.png",
    "/assets/images/vishnu_sahastranaam/v33.png",
    "/assets/images/vishnu_sahastranaam/v34.png",
    "/assets/images/vishnu_sahastranaam/v35.png",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        ॥ श्री हनुमान चालीसा ॥ <br /> ॥ दोहा॥ <br />
        श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि । बरनउँ रघुबर बिमल जसु जो
        दायकु फल चारि ॥ <br />
        बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार । बल बुधि बिद्या देहु मोहिं हरहु
        कलेस बिकार ॥ ॥ चौपाई ॥ जय हनुमान ज्ञान गुन सागर । जय कपीस तिहुँ लोक
        उजागर ॥ राम दूत अतुलित बल धामा । अंजनि पुत्र पवनसुत नामा ॥ महाबीर बिक्रम
        बजरंगी । कुमति निवार सुमति के संगी ॥ कंचन बरन बिराज सुबेसा । कानन कुण्डल
        कुँचित केसा ॥४ हाथ बज्र अरु ध्वजा बिराजै । काँधे मूँज जनेउ साजै ॥ शंकर
        स्वयं/सुवन केसरी नंदन । तेज प्रताप महा जगवंदन ॥ बिद्यावान गुनी अति चातुर
        । राम काज करिबे को आतुर ॥ प्रभु चरित्र सुनिबे को रसिया । राम लखन सीता मन
        बसिया ॥८ सूक्ष्म रूप धरि सियहिं दिखावा । बिकट रूप धरि लंक जरावा ॥ भीम
        रूप धरि असुर सँहारे । रामचन्द्र के काज सँवारे ॥ लाय सजीवन लखन जियाए ।
        श्री रघुबीर हरषि उर लाये ॥ रघुपति कीन्ही बहुत बड़ाई । तुम मम प्रिय भरतहि
        सम भाई ॥१२ सहस बदन तुम्हरो जस गावैं । अस कहि श्रीपति कण्ठ लगावैं ॥
        सनकादिक ब्रह्मादि मुनीसा । नारद सारद सहित अहीसा ॥ जम कुबेर दिगपाल जहाँ
        ते । कबि कोबिद कहि सके कहाँ ते ॥ तुम उपकार सुग्रीवहिं कीह्ना । राम मिलाय
        राज पद दीह्ना ॥१६ तुम्हरो मंत्र बिभीषण माना । लंकेश्वर भए सब जग जाना ॥
        जुग सहस्त्र जोजन पर भानु । लील्यो ताहि मधुर फल जानू ॥ प्रभु मुद्रिका
        मेलि मुख माहीं । जलधि लाँघि गये अचरज नाहीं ॥ दुर्गम काज जगत के जेते ।
        सुगम अनुग्रह तुम्हरे तेते ॥२० राम दुआरे तुम रखवारे । होत न आज्ञा बिनु
        पैसारे ॥ सब सुख लहै तुम्हारी सरना । तुम रक्षक काहू को डरना ॥ आपन तेज
        सम्हारो आपै । तीनों लोक हाँक तै काँपै ॥ भूत पिशाच निकट नहिं आवै । महावीर
        जब नाम सुनावै ॥२४ नासै रोग हरै सब पीरा । जपत निरंतर हनुमत बीरा ॥ संकट तै
        हनुमान छुडावै । मन क्रम बचन ध्यान जो लावै ॥ सब पर राम तपस्वी राजा ।
        तिनके काज सकल तुम साजा ॥ और मनोरथ जो कोई लावै । सोई अमित जीवन फल पावै
        ॥२८ चारों जुग परताप तुम्हारा । है परसिद्ध जगत उजियारा ॥ साधु सन्त के तुम
        रखवारे । असुर निकंदन राम दुलारे ॥ अष्ट सिद्धि नौ निधि के दाता । अस बर
        दीन जानकी माता ॥ राम रसायन तुम्हरे पासा । सदा रहो रघुपति के दासा ॥३२
        तुम्हरे भजन राम को पावै । जनम जनम के दुख बिसरावै ॥ अंतकाल रघुवरपुर जाई ।
        जहाँ जन्म हरिभक्त कहाई ॥ और देवता चित्त ना धरई । हनुमत सेइ सर्ब सुख करई
        ॥ संकट कटै मिटै सब पीरा । जो सुमिरै हनुमत बलबीरा ॥३६ जै जै जै हनुमान
        गोसाईं । कृपा करहु गुरुदेव की नाईं ॥ जो सत बार पाठ कर कोई । छूटहि बंदि
        महा सुख होई ॥ जो यह पढ़ै हनुमान चालीसा । होय सिद्धि साखी गौरीसा ॥
        तुलसीदास सदा हरि चेरा । कीजै नाथ हृदय मह डेरा ॥४० ॥ दोहा ॥ पवन तनय संकट
        हरन, मंगल मूरति रूप । राम लखन सीता सहित, हृदय बसहु सुर भूप ॥
      </h1>
      <Header />
      {/* <div>
        <div
          id="carouselExampleCaptions"
          style={{ height: "400px" }}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imageSource1}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageSource2}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageSource3}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
      <Carousel />
      <div
        className="container-fluid"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
        <Card
          imgArrayFromUser={ganpati_sukhkarta_aarti}
          imgAudio="/assets/audio/ganpati_sukh_karta_aarti.mp3"
          imgTitle="Ganpati Sukh karta aarti"
          imgSrc="/assets/images/ganpati.jpg"
        />
        <Card
          imgArrayFromUser={shanidev_aarti}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Shanidev aarti"
          imgSrc="/assets/images/shanidev.jpg"
        />
        <Card
          imgArrayFromUser={vishnu_sahas}
          imgAudio="/assets/audio/vishnu_sahas.mp3"
          imgTitle="Vishnu sahsranaam"
          imgSrc="/assets/images/vishnu.jpg"
        />
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
      </div>
    </main>
  );
}
