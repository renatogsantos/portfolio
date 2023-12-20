"use client";
import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";

export default function HeroTwo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{
          duration: 1,
          bounce: 0.6,
          type: "spring",
          delay: 0.5,
        }}
      >
        <ParallaxText baseVelocity={1}>PORTFOLIO</ParallaxText>
        <ParallaxText baseVelocity={-1}>NOSSOS CLIENTES</ParallaxText>
      </motion.div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 1,
              bounce: 0.6,
              type: "spring",
              delay: 0.5,
            }}
            className="xl:w-1/3 p-6 sticky xl:top-16 h-full"
          >
            <h2 className="text-3xl xl:text-6xl font-bold text-main-700 dark:text-white">
              Conheça alguns dos <b>Nossos Clientes</b>
            </h2>
            <p className="font-medium mt-3">
              Bem-vindo ao <b>Studio Digital</b>, onde a inovação encontra o
              design e a experiência digital ganha vida!
            </p>
            <p className="font-medium mt-3">
              Descubra o potencial ilimitado da sua presença online através do
              nosso expertise em Design UX/UI e Desenvolvimento Web com
              tecnologias avançadas como Next.js, Tailwindcss e Typescript.
              Deixe-nos guiar você por uma jornada onde suas ideias se
              transformam em experiências digitais extraordinárias.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              duration: 1,
              bounce: 0.6,
              type: "spring",
              delay: 0.5,
            }}
            className="xl:w-full p-6"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            iste a consequatur voluptas voluptatibus enim nostrum nam quos! Odit
            dolores quidem fuga consectetur sint expedita ad eveniet dolore ut
            id deserunt amet quod error, voluptate enim officiis ea sunt saepe
            numquam omnis commodi aliquid pariatur voluptatem optio! Labore
            alias a sapiente modi amet esse eligendi ea consequatur, debitis
            ratione possimus repudiandae nihil ex autem, culpa impedit ut magni
            facilis, quas ipsa voluptatum corporis sint! Commodi, accusantium
            dolore nisi asperiores fuga atque saepe iusto quis et, sapiente
            dolor facere, deleniti ducimus neque. Aliquam ut, magni impedit
            molestias veniam recusandae sunt ullam accusantium ipsum, facere
            fugiat provident ab ad nam ratione tenetur sapiente harum fugit
            minima aliquid. Incidunt reprehenderit quia nesciunt mollitia alias
            ut deleniti, accusantium, ipsum facilis, repudiandae aliquam!
            Possimus, in alias, quisquam aliquam nostrum repellendus expedita
            veritatis totam nesciunt dolore ab dignissimos consequatur natus
            ipsum fugit. Incidunt voluptates a perspiciatis repellendus
            deleniti, ratione suscipit beatae ut alias laborum odio quo repellat
            iure natus, veritatis consequuntur ducimus optio cupiditate totam
            necessitatibus pariatur quasi quaerat error. Distinctio laboriosam
            neque soluta cum necessitatibus ab impedit, nam tenetur. Vero
            recusandae nemo veniam quam magnam necessitatibus accusantium esse
            dolorum. Laborum temporibus explicabo omnis eum vel doloribus veniam
            harum? Ipsam, vero accusamus blanditiis molestiae iste nobis totam.
            Magni reiciendis tempora consequatur, enim architecto quidem cum,
            libero reprehenderit debitis aperiam sapiente ipsam repudiandae
            obcaecati illo exercitationem? Deserunt suscipit ipsam libero velit.
            Necessitatibus non amet officia provident possimus, quia, placeat
            aliquam, quae sit quam odit. Saepe aliquam harum dolore beatae,
            corrupti, delectus eum iure dolores exercitationem possimus fuga
            reiciendis. Eum officiis maiores eaque atque praesentium est ea
            veritatis facilis autem blanditiis ratione, voluptate optio corporis
            rem doloremque, ex officia saepe reiciendis! Provident, beatae.
            Dicta, est cupiditate optio rem nemo fuga sapiente autem labore,
            molestias vero omnis ut reiciendis nam animi eius. Labore et itaque
            consectetur nostrum ducimus aspernatur expedita numquam earum vitae
            animi veritatis soluta eveniet iusto eligendi reprehenderit, dolorem
            cumque ratione molestiae ab. Alias pariatur illo commodi
            voluptatibus. Ad nisi ipsum blanditiis, expedita minus porro!
            Perspiciatis pariatur distinctio enim, ullam aliquid officia velit.
            Aliquid cupiditate doloribus aliquam deleniti ipsa ullam. Temporibus
            repudiandae reprehenderit aliquam veritatis magnam consequuntur
            optio iste earum doloribus! Eum placeat expedita velit natus totam
            ullam nostrum dignissimos obcaecati optio. Praesentium
            necessitatibus expedita, eligendi, odio pariatur veniam mollitia
            odit beatae quis cum quisquam dolorem explicabo non libero quibusdam
            ducimus. Aliquam amet quibusdam nam recusandae quo? Voluptatibus
            iste a quasi suscipit officiis harum. Minus consectetur vitae, animi
            amet nostrum molestiae ut eveniet deleniti repudiandae asperiores
            pariatur aspernatur necessitatibus maxime quaerat accusamus quo
            deserunt quam vero sequi ipsam ad! Debitis nesciunt culpa
            dignissimos molestias a. Veniam labore dignissimos repellendus atque
            porro laboriosam nemo placeat quisquam ut reiciendis alias natus
            expedita itaque tempore totam magnam praesentium voluptates, aperiam
            incidunt! Reprehenderit soluta laudantium temporibus in, ipsum
            veniam tempore ad eum a cupiditate possimus quisquam amet? Nisi,
            sequi quas. Reprehenderit eum tempore modi molestiae, dolores, quas
            necessitatibus aut quaerat voluptates nemo similique quidem aliquam.
            Inventore voluptates dignissimos deserunt voluptatibus provident
            natus modi fugiat, quidem, veritatis aut ab nisi? Quam deserunt,
            laudantium harum aliquam vel quis inventore fugit eos aut
            consequuntur nobis! Ut quam odit facere officia quia itaque
            deserunt! At facere deserunt labore deleniti maxime doloremque,
            voluptatem architecto error laborum aperiam eligendi molestias eos
            eaque vel officia magnam neque sunt ipsam tempora temporibus autem,
            repudiandae quisquam. Provident modi dolor iure, ab dicta voluptates
            aperiam deserunt! Odio eveniet voluptatibus est pariatur omnis,
            temporibus quasi nisi illo quos. Non sunt neque dolores quisquam
            suscipit recusandae nobis, molestiae animi, aperiam ex et ipsa,
            perferendis iure. Natus soluta architecto error obcaecati aut
            commodi corrupti eveniet. Ab assumenda, eum in beatae eius
            architecto enim aliquid culpa, ex fugiat, minima nemo veniam fugit
            provident obcaecati. Consequuntur aut temporibus ipsa ab dignissimos
            perspiciatis cumque possimus aspernatur necessitatibus voluptatum
            inventore dolor, laudantium repellendus voluptas excepturi commodi
            quam voluptate officia et enim? Officia tempora corrupti animi
            incidunt asperiores quod accusamus ratione fugit. Consequuntur,
            quasi veniam! Quod enim quos maxime? Eum, cupiditate molestias? Non
            asperiores delectus nemo adipisci mollitia alias quae perspiciatis
            esse molestias itaque quo animi commodi ea dolores repellendus iste,
            natus necessitatibus. Quo fugiat pariatur deserunt odit doloremque,
            eos tempora? Suscipit excepturi consequatur repudiandae, ratione
            culpa esse distinctio. Odit at enim iure dolores velit neque
            eligendi autem et placeat. Consectetur aut officiis illum ratione
            autem repellat assumenda aliquid vel id expedita perspiciatis
            mollitia, qui nemo eveniet nam aperiam magnam ipsa. Officiis magni,
            illum possimus nemo ullam at? Animi officia, quaerat blanditiis
            consectetur quod dolorum ipsa beatae nemo, aspernatur sunt veniam
            vero? Doloribus, blanditiis nihil qui unde porro harum vitae quas
            est assumenda illo voluptates reprehenderit consectetur minima
            cupiditate eius placeat deleniti omnis voluptatibus repudiandae. Ab
            officia magni natus libero laudantium possimus aliquam quo nulla!
            Accusamus vero earum eius perferendis? Unde voluptatum minima
            laborum necessitatibus tenetur? Maiores velit laborum ea ab
            consequuntur distinctio, iusto deleniti! Sunt commodi quibusdam
            ducimus facere tempore harum corporis perferendis provident quae
            eligendi dolorem, culpa natus corrupti similique quam illo explicabo
            eum incidunt! Omnis, repellat architecto ut porro, at doloribus esse
            nostrum qui velit, asperiores voluptatibus ab quasi atque
            consequatur natus mollitia officia facilis. Quia, quam nisi. Vel
            quae ducimus explicabo dicta iure quaerat eos non cupiditate omnis!
            Consequuntur tempore quos reiciendis nesciunt est veritatis
            asperiores deleniti mollitia velit itaque? Placeat eos doloribus,
            aliquam consectetur ipsam officia repellendus ex velit vero, dolorem
            alias. Vero sit nisi earum facere, harum architecto quod minima
            voluptatibus dolor eaque tenetur unde laboriosam atque nobis
            explicabo fugiat quia velit molestiae enim reprehenderit accusamus,
            quam quidem voluptate. Sint minima esse tempore saepe veritatis quos
            quibusdam! Dignissimos soluta commodi eos laudantium ipsam voluptas
            voluptatibus nisi, reiciendis, vero maxime autem, a repellat
            architecto tempora ullam amet assumenda deleniti! Deserunt quibusdam
            quam natus excepturi, atque vitae perferendis deleniti blanditiis
            minus quidem beatae maiores numquam ipsum maxime distinctio expedita
            enim quasi at, hic vel impedit et? Fugiat, dolores quidem cumque
            ducimus excepturi atque totam pariatur repellendus, perferendis
            ipsum officiis assumenda corporis tempore quisquam itaque placeat
            sunt amet alias minima fugit nostrum numquam exercitationem autem?
            Assumenda illum hic numquam impedit perspiciatis est adipisci
            consequatur, provident tenetur cupiditate, officia porro repellat
            laboriosam doloribus sed nemo. Nostrum, nemo. Sunt corporis odio
            possimus, laborum, necessitatibus sint ipsa aspernatur, porro
            repellendus quis non est voluptatibus corrupti laudantium blanditiis
            saepe atque et nulla. Molestias consectetur quidem reiciendis totam
            suscipit esse omnis possimus? Reiciendis dolor quidem obcaecati
            ullam magni. Ad reprehenderit velit recusandae fugit harum quam in,
            quis minima eum excepturi laboriosam consectetur facere obcaecati
            optio dolorum iste ipsum minus mollitia magnam? Minus ipsa in veniam
            rerum beatae odio expedita iure illum id incidunt dolor voluptas
            fuga, quod optio natus facere ex, reiciendis, dolorem alias quos
            omnis quas. Beatae iusto dignissimos officia natus cumque excepturi
            at error nemo ratione ullam, labore id exercitationem illum vitae
            magni nesciunt repellat. Quaerat incidunt dolorem dolore quam
            cumque. Repellat aliquam ratione quo nam provident iusto voluptates
            quis maxime expedita, mollitia et ipsa blanditiis rerum placeat,
            delectus dignissimos ipsam aperiam quisquam, dicta ut laboriosam
            incidunt accusantium veritatis dolor? Neque, laborum rerum molestias
            aliquid corporis vero dicta totam! Natus officia sint ratione ad
            laborum ducimus iusto quod commodi iure temporibus nemo enim, eum
            cum aperiam eveniet molestias veniam eius. Excepturi, natus? Nulla
            veniam obcaecati enim est, eveniet architecto eos, id nesciunt
            quasi, hic minima nemo quod modi porro magnam? Enim numquam
            obcaecati eligendi vitae delectus facilis, quam reiciendis tempore,
            nisi velit error. Possimus, facilis molestias doloribus voluptatum
            commodi harum nisi illum quod? Laudantium, praesentium repellat.
            Iusto enim, recusandae et, iure voluptas nisi voluptatum eum
            repellendus eveniet mollitia quaerat, cumque asperiores. Culpa
            aliquam minima quidem ratione eveniet maiores, mollitia quos, neque
            veniam odit dicta praesentium, voluptate molestiae eos rerum
            molestias? Eaque iure hic assumenda delectus quis labore fugiat
            dignissimos iusto dolore, nostrum adipisci enim sequi, nam id. Earum
            labore ipsum eligendi dolores expedita quisquam fuga odit optio
            voluptatum magni ratione dolore distinctio adipisci quis laborum
            quam, vero accusamus. Sequi nemo reprehenderit placeat doloribus,
            animi numquam, natus nisi dolorum ullam delectus a vel, reiciendis
            explicabo praesentium enim similique repellendus fuga illum
            consequuntur fugiat necessitatibus harum quos. Explicabo, sequi.
            Consequuntur aspernatur incidunt totam facere quam quas
            reprehenderit, cum tempora fugit eveniet error delectus culpa aut
            vero dignissimos iure voluptate, unde, optio est quisquam similique.
            Fugit amet asperiores quidem molestias vel sint tempora ab
            reprehenderit aut eligendi mollitia necessitatibus laborum dolorum
            quo numquam, maxime repellat ea illo, sapiente quia voluptates
            cupiditate? Et blanditiis a vel architecto ipsa repellat rem quia in
            voluptas dicta dolore, minima quaerat labore tenetur nam iste,
            consequuntur asperiores voluptatem culpa suscipit ipsam hic
            assumenda? Fugiat quo doloremque reprehenderit accusantium aliquid
            non magnam adipisci quasi molestias deleniti labore, blanditiis
            distinctio. Placeat recusandae esse atque odio harum excepturi, quo
            molestiae, nemo commodi debitis, id provident assumenda incidunt in
            tempore architecto omnis error ex saepe possimus nihil! Dolorum
            eveniet, et tenetur assumenda explicabo commodi? Id dicta sunt et,
            quidem impedit fugiat illum maiores, nihil non exercitationem
            veritatis accusantium explicabo, aut animi ipsa magnam mollitia. Ut,
            non nihil necessitatibus sunt eos architecto rem sint expedita,
            rerum quod mollitia totam molestias tempore aliquid.
          </motion.div>
        </div>
      </div>
    </>
  );
}
