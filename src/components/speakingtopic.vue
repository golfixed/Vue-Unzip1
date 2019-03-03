<template>
  <div>
    <masonry :cols="{default: 4, 1366: 3, 700: 2, 414: 1}" :gutter="{default: '20px', 700: '15px'}">
      <card v-for="(topic, index) in topics" :key="index">
        <div class="bg" tabindex="0">
          <div class="topic">
            <h5 style="margin-bottom: 0px;">{{topic.topic}}</h5>
          </div>
          <div class="description">
            <p style="margin-bottom: 0px;">{{topic.description}}</p>
          </div>
          <div class="speaker">
            <p style="margin-bottom: 0px;">{{topic.by}}</p>
          </div>
        </div>
      </card>
    </masonry>
  </div>
</template>

<script>
import VueMasonry from "vue-masonry-css";

export default {
  name: "speakingtopic",
  components: {
    VueMasonry
  },
  data() {
    return {
      topics: [
        {
          order: 0,
          topic:
            "Serverless Big Data Architecture on Google Cloud Platform at Credit OK",
          description:
            "The talk is about serverless big data architecture on GCP (Google Cloud Platform) that how Credit OK, a credit scoring and big data analytics company is using. I will introduce several GCP tools for big data those do not require a single server to perform such task in a very high performance manner. I also have a blog on this topic please see if you want to know more beforehand: https://www.spicydog.org/blog/serverless-big-data-on-gcp-creditok-ep3/",
          by: "Kriangkrai"
        },
        {
          order: 1,
          topic: "My Life can Edit ชีวิตเราตัดต่อได้",
          description:
            "เล่าถึงผู้พูดที่มีความสนใจในเรื่องของการตัดต่อ แต่กลับเรียนสายวิศวะ ใช้ชีวิตอย่างไรให้ไม่ทิ้งความฝันตัวเอง",
          by: "พีรกิตติ์"
        },
        {
          order: 2,
          topic: "วิถีชีวิตมนุษย์ล้อ",
          description:
            "เรื่องราวเกี่ยวกับชีวิตประจำวันของผู้พิการนั่งวีลแชร์คนหนึ่ง ตั้งแต่การเดินทางจากบ้านไปทำงาน การใช้ชีวิตทั่วไป เช่น รับประทานอาหาร เข้าห้องน้ำ เป็นต้น และประสบการณ์ที่พบระหว่างทาง พร้อมทั้งเกร็ดความรู้เรื่องต่าง ๆ ได้แก่ การช่วยเหลือผู้พิการ, ความสำคัญของ Priority, Universal Design, International Symbol of Access",
          by: "Sattaya"
        },
        {
          order: 3,
          topic: "What does a game designer do?",
          description:
            "เล่าประสบการณ์การทำอาชีพ Game Designer ในบริษัทพัฒนาเกมอันดับต้นๆ ของเมืองไทย อาชีพนี้ต้องทำอะไรบ้าง? ลักษณะงานเป็นยังไง? ทำเกมกับเล่นเกมมันต่างกันมากน้อยแค่ไหน?",
          by: "Warat"
        },
        {
          order: 4,
          topic: "Blockchain::the real evolution and the next revolution",
          description:
            "ต้องการอธิบายและแสดงให้เห็นถึงความสำคัญของ Blockchain และตัวอย่างการนำ Blockchain ไปใช้ให้เกิดประโยชน์",
          by: "Rattapol"
        },
        {
          order: 5,
          topic: "Dreams",
          description:
            "This talk's goals are to encourage people to dream freely, regardless to whatever situation they are facing and to remind them don't forget their dreams.",
          by: "Napassorn"
        },
        {
          order: 6,
          topic: "เมื่อชีววิทยาไม่ได้อยู่แค่ในหนังสือเรียน Bioinformatics 101",
          description:
            '"เราจะเรียนวิชา...ไปทำไมถ้าไม่ได้ใช้" คำถามยอดฮิตของเด็กไทยสมัยวัยเรียน โดยเฉพาะการท่องไฟลัมหรือนั่งจำส่วนประกอบต่าง ๆ ในเซลล์จะดีกว่าไหมถ้าเราเห็นภาพวิชาชีววิทยาอันน่าเบื่อ ถูกมาประยุกต์ใช้กับเทคโนโลยีในปัจจุบัน จนตกตะกอนเป็นสิ่งต่าง ๆ ที่จับต้องได้ในชีวิตประจำวัน',
          by: "Jiramaetha"
        },
        {
          order: 7,
          topic: "โลกของความขี้เกียจ",
          description:
            "อะไรคือความขี้เกียจ ปัญหาของความขี้เกียจ ประโยชน์ของความขี้เกียจ การเอาชนะความขี้เกียจ",
          by: "Chirateep"
        },
        {
          order: 8,
          topic: "Customer experience in action",
          description:
            "What is experience? Why it is important today? How to implement",
          by: "Tamon"
        },
        {
          order: 9,
          topic: "ทำงาน 2 ปีกับการย้ายงาน 4 ที่",
          description:
            "เล่าประสบการทำงานในแต่ล่ะที่ในสายงานโปรแกรมเมอร์จากผู้ที่ย้ายงานมาเยอะที่สุดใน CPE#27",
          by: "Sippakorn"
        },
        {
          order: 10,
          topic: "ภาษาประดิษฐ์ - ทางเลือกหนึ่งของการสื่อสาร",
          description:
            "ภาษาบนโลกใบนี้ไม่ได้แบ่งแค่ตามประเทศหรือวัฒนธรรม แต่ยังมีกลุ่มคนหลายกลุ่มสร้างภาษาประดิษฐ์ขึ้นมามากมายเพื่อทดแทนภาษาของมนุษย์  มาร่วมศึกษาไวยากรณ์เบื้องต้นของภาษา Esperanto ซึ่งเป็นภาษาประดิษฐ์ที่ได้รับความแพร่หลาย และพูดคุยประเด็นที่น่าสนใจต่างๆ ของภาษาประดิษฐ์",
          by: "Suthep"
        },
        {
          order: 11,
          topic: "How to make your web faster",
          description:
            "การ optimize เว็บให้เร็วขึ้นไม่ใช่เรื่องยากกว่าที่คิด บางอันทำได้ง่ายมาก",
          by: "ธนนันท์"
        },
        {
          order: 12,
          topic: "ตะลุย Sillicon Valley กับเด็กอายุ 17",
          description:
            "บอกเล่าประสบการณ์ที่ได้ไปทำงานที่ California เริ่มตั้งแต่ทำยังไงให้ได้ไป เจอกับอะไรบ้าง การทำงานในวัยเด็กเป็นอย่างไร ทำยังไงให้สนุกกับมีทอัพต่างประเทศ ไปจนถึงการใช้ชีวิตและวัฒนธรรมของ Bay Area",
          by: "Phoomparin"
        },
        {
          order: 13,
          topic: "3.75 ปี กับสิ่งที่มหาลัยไม่ได้ (ตั้งใจจะ) สอน",
          description:
            "แบ่งปันประสบการณ์ที่ได้จากการใช้ขีวิตมหาลัยตลอดเวลาเกือบ 4 ปีที่ผ่านมา และชวนน้องๆ รุ่นหลังๆ ตั้งคำถามเพื่อนำไปสู่การมองเห็นโอกาสในการพัฒนาตัวเองบนพื้นที่แหน่งนี้ ที่ซึ่งไม่สมบูรณ์แบบ ที่ซึ่งเราอยู่ร่วมกัน",
          by: "วิถี"
        },
        {
          order: 14,
          topic: "Life abroad: ทำไมควรจะไปแลกเปลี่ยนสักครั้งในชีวิต",
          description:
            "เล่าเรื่องราว ประสบการณ์ จากการไปแลกเปลี่ยนต่างประเทศ (ฟินแลนด์, ฝรั่งเศส) พร้อมเหตุผลว่าทำไมควร apply ไป",
          by: "Tulathorn"
        },
        {
          order: 15,
          topic: "How an exchage program changed me (and my life)",
          description:
            "I went on an exchange program in the academic year 2016-2017 to Belgium. Being there, I've met a lot of people who have helped me grow as a person and develop my personality and identity. I've learned to be more confident and more engaged with life. In my speech, I will be sharing my exchange year experience, and how that has affected me and my life.",
          by: "Tirapat"
        },
        {
          order: 16,
          topic: "What it’s like to do an American Road Trip",
          description:
            "ทริปของผมกับครอบครัว ทำโร้ดทริปที่สหรัฐเป็นเวลา 1 เดือนตอนปี 2017 ครับ พูดถึงประสบการณ์ จุดน่าท่องเที่ยว สิ่งที่ควรรู้ ความรู้สึกครับ",
          by: "Buris"
        },
        {
          order: 17,
          topic: "The Moment of Friendship ",
          description:
            'ช่วงเวลาที่ได้รู้จักคำว่า "มิตรภาพ" ที่เกิดจากการสะสมเม็ดทรายแห่งประสบการณ์ นำมาบรรจุอยู่ในขวดโหลที่เรียกว่าความทรงจำที่มองไปกี่ครั้งก็สัมผัสได้ถึงความอบอุ่นเสมอมา',
          by: "Panthipa"
        },
        {
          order: 18,
          topic: "ชีวิตในมหาลัยที่ไม่ได้หยุดอยู่ที่ห้องเรียน",
          description:
            "เราเชื่อว่ามหาลัยนอกจากจะเป็นพื้นที่ที่มีการเรียนรู้ในห้องเรียนแล้ว เราก็ยังเชื่อว่ามหาลัยก็เป็นพื้นที่ที่ให้เราได้ลองทำตามความฝัน ลองเปิดโลกทำสิ่งที่อยากทำเหมือนกัน ดังนั้นจึงเป็นที่มาของ talk นี้ที่ เราอยากจะเล่าเรื่องราวการใช้ชีวิตที่มากกว่าแค่การเรียน จากความฝันสู่ความกล้า และจากความกล้าสู่การลงมือครับ",
          by: "Chainarong"
        },
        {
          order: 19,
          topic: "ศิลปะการสื่อสารและการทำงานร่วมกันผู้อื่น",
          description:
            "แบ่งปันประสบการณ์จากการทำงานร่วมกันผู้อื่นในหลายบริษัท และหลากหลายธุรกิจ เพราะต้องใช้วิธีการสื่อสารหลากหลายรูป มันไม่ใช่เพียงแค่ภายในชีวิตวัยทำงาน แต่มันหมายถึงทั้งชีวิต เพราะเราคือมนุษย์ที่ต้องพบเจอผู้คน เข้าใจตนเองและเข้าใจผู้อื่นที่ร่วมบทสนทนา หรือรวมไปถึงวิธีการสนทนาและให้คำแนะนำกับผู้ที่เราไม่เคยเจอกันมาก่อน",
          by: "Sutham"
        },
        {
          order: 20,
          topic: "Hatch: How KMUTT supports student entrepreneurship",
          description: "Coming Soon"
        },
        {
          order: 21,
          topic: "Coming Soon",
          description: "Coming Soon"
        },
        {
          order: 22,
          topic: "Coming Soon",
          description: "Coming Soon"
        },
        {
          order: 23,
          topic: "Coming Soon",
          description: "Coming Soon"
        },
        {
          order: 24,
          topic: "Coming Soon",
          description: "Coming Soon"
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg {
  background-color: white;
  border-radius: 20px;
  margin: 0px 0px 20px 0px;
  overflow: hidden;
}
.topic {
  padding: 10px;
  background-color: #e0e0e0;
}
.description {
  padding: 0px 10px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: all 1s;
}
.bg:focus > .description, .bg:hover > .description {
  max-height: 100vh;
  padding: 10px 10px;
}
.speaker {
  padding: 10px;
  background-color: whitesmoke;
}
</style>
