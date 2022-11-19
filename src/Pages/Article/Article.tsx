import { FC, useContext } from 'react'

import { PagesContext } from 'Contexts/Pages/Pages'

import {
	Header,
	BackButton,
	Content,
	Title,
	ImageContainer,
	Source,
	Image,
	TextContainer,
	Text,
} from './Styles'

const Article: FC = () => {
	const { SetSelectedArticleId } = useContext(PagesContext)

	const OnBack = () => {
		SetSelectedArticleId(undefined)
	}

	return (
		<>
			<Header>
				<BackButton onClick={OnBack}>Kembali</BackButton>
			</Header>
			<Content>
				<Title>Name</Title>
				<ImageContainer>
					<Source>Sumber: https://example.com/</Source>
					<Image src='Public/People/Soekarno/Thumbnail.jpg' />
				</ImageContainer>
				<TextContainer>
					<Source>Sumber: https://example.com/</Source>
					<Text>
						{`Ir.Soekarno, Pahlawan Nasional Indonesia yang merupakan presiden pertama Republik Indonesia. Perjuangan dan jasanya untuk bangsa Indonesia tidak terhitung jumlah, bahkan kehebatannya tidak hanya terkenal di dalam negeri namun sampai internasional. Itulah sebabnya biografi Ir. Soekarno sangat menarik untuk dibahas dan diketahui oleh generasi bangsa Indonesia.
Sosok Soekarno memiliki tempat tersendiri bagi masyarakat Indonesia dan memberikan banyak teladan bagi bangsa. Banyak tenaga, pemikiran, bahkan jiwa dipertaruhkan oleh Soekarno untuk Indonesia, mulai dari melawan penjajahan sampai membangun bangsa ini menjadi seperti sekarang. Soekarno menjadi tokoh penting dalam sejarah Indonesia yang akan terus terkenang jasa-jasanya.

Ir. Soekarno atau akrab dipanggil Bung Karno lahir pada 6 Juni 1901 di Surabaya, Jawa Timur dengan nama kecilnya Kusno Sosrodihardjo dan wafat pada 21 Juni 1970 di Jakarta. Bung Karno adalah anak dari pasangan Raden Soekemi Sosrodihardjo dan Ida Ayu Nyoman Rai. Karena sakit-sakitan, Soekarno kecil dirawat kakaknya bernama Raden Hardjodikromo di Tulungagung. Soekarno kembali tinggal dengan bapak dan ibunya pada 1909 di Mojokerto.
Di Mojokerto itulah sang ayah ditugaskan sebagai kepala Eerste Inlandse School dan Soekarno pun sekolah ditempat itu. Sejak tinggal kembali bersama orang tuanya, Soekarno mengganti namanya dari Kusno menjadi Soekarno agar dirinya tidak sakit-sakitan lagi dan dapat tumbuh dengan sehat. Sejak kecil Soekarno sudah menjadi anak yang berprestasi bahkan mampu menguasai banyak bahasa. Itulah sebabnya kecerdasan Soekarno dikenal oleh dunia.

Tahun 1911 Soekarno pindah lagi ke ELS yang setara dengan Sekolah Dasar (SD) yang khusus dipersiapkan untuk masuk Hogere Burger School (HBS) di Surabaya. Tahun 1915 Soekarno pun menamatkan sekolahnya di ELS dan kemudian tinggal di rumah sahabat ayahnya, Haji Oemar Said Tjokroaminoto atau HOS Cokroaminoto yang merupakan pendiri Serikat Islam. Sejak itulah Soekarno mulia mengenal dunia perjuangan yang akhirnya membuatnya sangat ingin berjuang bagi bangsa Indonesia.
Di Kediaman Cokroaminoto, Soekarno muda mulai banyak belajar politik dan banyak berlatih pidato. Di sanalah Soekarno mulai kenal dan berinteraksi dengan tokoh-tokoh hebat, seperti Dr. Douwes Dekker, Tjipto Mangunkusumo, dan Ki Hajar Dewantara. Merekalah pemimpin organisasi National Indische Partij saat itu.
Bersekolah di HBS memberi banyak pengalaman dan pelajaran bagi Soekarno, hingga akhirnya lulus dan tahun 1921. Setelah itu Soekarno pun kembali pindah tempat tinggal, yakni ke Bandung dan tinggal bersama Haji Sanusi untuk melanjutkan pendidikannya di Technische Hooge School (THS) jurusan teknik sipil atau kita kenal sekarang sebagai kampus ITB. Disanalah Soekarno mendapatkan gelar insinyur-nya dengan lulus pada tanggal 25 Mei 1926.
Soekarno diwisuda bersama dengan delapan belas unsur lainnya tepat saat Dies Natalis ITB yang ke-61 pada 3 Juli 1926. Menurut Prof. Jacob Clay Sebagai ketua Fakultas di kampus tersebut menyatakaan kebanggannya karena ada 3 orang insinyur orang Jawa, Yakni Soekarno, Anwari, dan Soetedjo, dan gelar insinyur dari daerah lainnya.

Di masa hidupnya, Soekarno telah menikahi sejumlah perempuan, yakni Fatmawati, Hartini, Ratna Sari Dewi, Kartini Manopo, Haryati, Yurike Sanger, dan Heldy Djafar. Atas pernikahannya tersebut, Soekarno dikarunia 11 orang anak. Sebagian keturunan Soekarno pada akhirnya juga ada yang mengikuti jejak sang ayah di dunia politik Indonesia.
Yakni putrinya yang bernama Megawati Soekarnoputri yang pernah menjabat sebagai presiden ke-5 RI, Rachmawati Soekarnoputri, dan Sukmawati Soekarnoputri. Putranya yang pertama dengan Fatmawati, Guntur Soekarnoputra justru tidak terjun ke dunia politik seperti dirinya dan adik-adik perempuannya.

Berbicara soal biografi Ir.Soekarno tidak lengkap rasanya jika tidak membahas kiprahnya di dunia politik yang sangat luar biasa. Ir. Soekarno bahkan sudah terjun ke dunia politik sejak usianya masih sangat muda. Soekarno terkenal pertama kali pada tahun 1915 saat menjadi anggota Jong Java Cabang Surabaya. Kebanyak organisasi di Indonesia menurut Soekarno masihlah Jawa Sentris yang hanya memikirkan kebudayaan saja.

Hal itulah yang membuat Soekarno perlu menjawab tantangan tersebut. Karena kesedihannya tersebut Soekarno pun memberikan pidato menggunakan bahasa ngoko (bahasa Jawa yang kasar) dalam rapat pleno tahunan Jong Java di Surabaya. Tak berselang lama, setelah sebulan rapat tersebut, Soekarno mencetuskan gagasan untuk membuat surat kabar Jong Java menggunakan bahasa Melayu, bukan bahasa Belanda.
Soekarno kemudian mendirikan Algemeene Studie (ASC) di Bandung pada tahun 1926 yang merupakan hasil inspirasi dari Dr. Soetomo di Indonesische Studie Club. Organisasi ASC inilah yang menjadi cikal bakal berdirinya partai besar di Indonesia, Partai Nasional Indonesia yang lahir tahun 1927. Berkat aktif di organisasi PNI itulah Soekarno beberapa ditangkap Belanda karena dianggap membahayakan pemerintah kolonial.
Tanggal 29 Desember 1929 Soekarno ditangkap di Yogyakarta untuk dipindahkan ke penjara Banceuy di Bandung. Kemudian pada tahun 1930 dipindahkan ke penjara Sukamiskin dan di tahun ini pula Soekarno mengeluarkan pledoi Indonesia Menggugat yang sangat fenomenal saat itu sampai akhirnya dibebaskan pada 31 Desember 1931. Setelah bebas dari penjara, tahun 1932 SOekarno bergabung dalam Partai Indonesia (Partindo) yang masih pecahan PNI karena saat itu PNI dibubarkan dan dinyatakan dilarang oleh Belanda.
Namun keaktifannya di Partino kembali mengantarkan ke penjara pada tahun 1933 di pengasingan Folders karena pergerakan yang bahaya bagi Belanda. Karena pengasingannya yang cukup lama dan sangat jauh hampir membuat tokoh-tokoh nasional Indonesia yang lainnya melupakan keberadaan dan keterlibatan Soekarno. Hal itu tidak membuatnya menyerah dan Soekarno terus mengirim surat kepada Ahmad Hasan, seorang Guru Persatuan Islam.
Tahun 1938 Soekarno kemudian diasingkan ke Provinsi Bengkulu sampai tahun 1942. Pada masa penjajahan Jepang tahun 1942 Soekarno baru kembali dibebaskan. Setelah melalui perjalanan panjang, tahun 1943 perdana menteri Jepang, Hideki Toja mengundah Soekarno, Muhammad Hatt, dan Ki Bagoes Hadikoesoemo yang kemudian disambut hangat kehadirannya oleh Kaisar Hirohito. Mereka bertiga telah dianggap sebagai keluarga kaisar Jepang dengan diberikannya Bintang Kekaisaran (Ratna Suci).
Sejak masa penjajahan Jepang itulah banyak muncul organisasi, seperti Jawa Hokokai, BPUPKI, Pusat Tenaga Rakyat (Putera) hingga PPKI dengan tokoh-tokoh utama yakni Soekarno, K.H Mas Mansyur, Ki. Hajar Dewantara, dan tokoh lainnya yang aktif di organisasi pergerakan nasional. Akhirnya tokoh-tokoh pergerakan nasional tersebut melakukan buy clenbuterol bekerjasama dengan pemerintah jepang untuk kemerdekaan Indonesia. Meskipun tetap ada yang melakukan gerakan bawah tanah seperti Amir Sjarifuddin dan Sutan Syahrir yang tidak sepenuhnya percaya pada Jepang dan menganggapnya berbahaya dan fasis.
Selama perjuangan yang panjang akhirnya Soekarno dan Moh. Hatta memproklamasikan kemerdekaan RI pada 17 Agustus 1945 yang didesak oleh kaum muda dan sempat diculik ke Rengasdengklok. Sejak itulah Soekarno diangkat menjadi Presiden pertama Indonesia dan mulai dikenal sebagai Sang Proklamator yang didampingi Mohammad Hatta sebagai wakilnya. Sebelumnya pada 1 Juni 1945 dalam sidang BPUPKI Soekarno sudah mengemukakan gagasan tentang dasar Negara, yakni Pancasila yang sekarang masih menjadi dasar Negara kita.
Setelah berhasil merumuskan Pancasila, Soekarno berupaya menyatukan nusantara menjadi Negara Kesatuan Republik Indonesia. Bahkan bangsa-bangsa di Asia, Afrika, dan Amerika Latin juga sempat diusahakan Soekarno dalam Konferensi Asia Afrika tahun 1955 di Bandung hingga akhirnya berkembang menjadi Gerakan Non Blok. Berkat jasa Soekarno lah banyak Negara kawasan Asia Afrika yang mereka, meskipun ada pula yang konflik berkepanjangan karena ketidakadilan di negaranya. Itulah sebabnya Soekarno dikenal dalam menjalankan politik bebas aktif dunia Internasional.
Atas kejayaan perjuangannya untuk Indonesia, Ir Soekarno juga mengalami masa jatuh dalam politiknya setelah Wakil Presiden Mohammad Hatta akhirnya memutuskan untuk mengundurkan diri dan memisahkan diri dari Soekrano tahun 1956. Selain itu banyak pula pemberontakan separatis yang terjadi di beberapa daerah di Indonesia. Berdasarkan catatan sejarah, puncak pemberontakan tersebut adalah saat terjadinya pemberontakan yang dikenal dengan G30S PKI yang meluluhlantakan masyarakat Indonesia Saat itu.
Karena peristiwa itulah Soekarno mendapat pengucilan dari presiden yang menggantikan dirinya, yakni Soeharto. Karena usianya yang sudah tua dan sering sakit-sakitan akhirnya Soekarno wafat di Jakarta, tepatnya Wisma Yaso pada tanggal 21 Juni 1970. Kemudian jasadnya dimakamkan di Blitar dan menjadi ikon kota Blitar hingga saat ini. Makam Soekarno Pun selalu ramai peziarah dan wisatawan yang datang di hari-hari tertentu dan sangat ramai saat haul Sang Proklamator tersebut.
`}
					</Text>
				</TextContainer>
			</Content>
		</>
	)
}

export default Article
