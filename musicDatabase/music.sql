--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Albums; Type: TABLE; Schema: public; Owner: jmmdgm
--

CREATE TABLE public."Albums" (
    "ID" integer NOT NULL,
    "Name" character varying,
    "Year" character varying,
    "Record Company" text,
    "Genre" character varying,
    "Artist ID" text
);


ALTER TABLE public."Albums" OWNER TO jmmdgm;

--
-- Name: Artists; Type: TABLE; Schema: public; Owner: jmmdgm
--

CREATE TABLE public."Artists" (
    "ID" integer NOT NULL,
    "NAME" character varying
);


ALTER TABLE public."Artists" OWNER TO jmmdgm;

--
-- Name: Songs; Type: TABLE; Schema: public; Owner: jmmdgm
--

CREATE TABLE public."Songs" (
    "ID" character varying NOT NULL,
    "NAME" character varying,
    "LENGTH" character varying,
    "ALBUM ID" integer,
    "ARTIST ID" integer
);


ALTER TABLE public."Songs" OWNER TO jmmdgm;

--
-- Name: Songwriters; Type: TABLE; Schema: public; Owner: jmmdgm
--

CREATE TABLE public."Songwriters" (
    "ID" integer NOT NULL,
    "Name" character varying,
    "Song ID" integer,
    "Album ID" integer,
    "Artist ID" integer
);


ALTER TABLE public."Songwriters" OWNER TO jmmdgm;

--
-- Data for Name: Albums; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public."Albums" ("ID", "Name", "Year", "Record Company", "Genre", "Artist ID") FROM stdin;
31	Dandelion Gum	2007	Graveface	Indie/Psychedelic Rock	1002
30	Falling Through a Field	2003	70s Gymnastics Recording Co.	Indie/Psychedelic Rock	1002
11	Green MInd	1991	Warner Bros. 	Alternative/Indie Rock	1000
20	Electr-O-Pura	1995	Matador	Indie/Experimental Rock	1001
10	Dinosaur	1985	Homestead 	Alternative/Indie Rock	1000
21	Ride the TIger	1986	Coyote	Indie/Experimental Rock	1001
40	Maniac Meat	2010	Anticon	Electronica	1003
50	De-Loused In The Comatorium	2003	Universal	Progressive Rock	1004
51	Frances the Mute	2004	Universal	Progressive Rock	1004
60	In the Court of the Crimson King	1969	Island	Progressive Rock	1005
61	In The Wake Of Poseidon	1970	Island	Progressive Rock	1005
41	Sweatbox Dynasty	2016	Ghostly International	Electronica	1003
\.


--
-- Data for Name: Artists; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public."Artists" ("ID", "NAME") FROM stdin;
1000	Dinosaur Jr
1001	Yo La Tengo
1002	Black Moth Super Rainbow
1003	Tobacco
1004	The Mars Volta
1005	King Crimson
\.


--
-- Data for Name: Songs; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public."Songs" ("ID", "NAME", "LENGTH", "ALBUM ID", "ARTIST ID") FROM stdin;
100	Forget the Swan	5:13	10	1000
101	Cats in a Bowl	3:39	10	1000
102	The Leper	4:08	10	1000
200	The Wagon	4:55	11	1000
201	Puke and Cry	4:27	11	1000
202	Blowing It	2:45	11	1000
203	I Live for That Look	1:56	11	1000
204	Flying Cloud	2:35	11	1000
205	\t\nHow'd You Pin That One On Me	4:23	11	1000
206	Water	5:38	11	1000
207	Muck	4:15	11	1000
208	Thumb	5:38	11	1000
209	Green Mind	4:56	11	1000
300	Decora	3:27	20	1001
301	Flying Lesson (Hot Chicken #1)\t	6:42	20	1001
302	The Hour Grows Late	3:06	20	1001
303	Tom Courtenay	3:30	20	1001
304	False Ending	0:56	20	1001
305	Pablo and Andrea	4:16	20	1001
306	Paul is Dead	2:26	20	1001
307	False Alarm	5:28	20	1001
308	The Ballad Of Red Buckets\t	4:00	20	1001
309	Don't Say A Word (Hot Chicken #2)\t	3:28	20	1001
310	(Straight Down To The) Bitter End\t	3:59	20	1001
311	My Heart's Reflection\t	6:02	20	1001
312	Attack On Love\t	1:52	20	1001
313	Blue Line Swinger\t	9:19	20	1001
400	The Cone of Silence	2:50	21	1001
401	Big Sky	2:46	21	1001
402	The Evil That Men Do	4:11	21	1001
403	The Forest Green	3:24	21	1001
404	The Pain of Pain	5:36	21	1001
405	The Way Some People Die	3:38	21	1001
406	The Empty Pool	2:22	21	1001
407	Alrock's Bells	4:09	21	1001
408	Five Years	3:46	21	1001
409	Screaming Dead Balloons	3:17	21	1001
410	Living in the Counrty	2:14	21	1001
500	Vietcaterpillar	2:06	30	1002
501	I Think It Is Beautiful That You Are 256 Colors Too\t	2:22	30	1002
502	Seasons for Blooming	2:13	30	1002
503	Letter People Show\t	3:47	30	1002
504	Dandelion Graves\t	4:44	30	1002
505	Boxphones	2:43	30	1002
506	Smog in Cities	2:38	30	1002
507	Your Doppelganger\t	1:49	30	1002
508	Falling Through A Field\t	2:18	30	1002
509	Colorful Nickels	3:51	30	1002
510	One Flowery Sabbath\t	1:58	30	1002
511	Sun Organ	1:01	30	1002
512	Boatfriend	2:45	30	1002
513	The Magical Butterfly Net\t	2:35	30	1002
514	Last House In The Enchanted Forest\t	1:48	30	1002
515	Lake Feet	2:20	30	1002
516	Melody For Color Spectrum\t	8:02	30	1002
600	Forever Heavy	4:15	31	1002
601	Jump Into My Mouth And Breathe The Stardust\t	2:33	31	1002
602	Melt Me	2:22	31	1002
603	Lollipopsichord	1:32	31	1002
604	They Live In The Meadow\t	2:33	31	1002
605	Sun Lips	3:16	31	1002
606	Rollerdisco	2:34	31	1002
607	Neon Syrup For The Cemetery Sisters\t	2:52	31	1002
608	The Afternoon Turns Pink\t	2:36	31	1002
609	When The Sun Grows On Your Tongue\t	2:40	31	1002
610	Spinning Cotton Candy In A Shack Made Of Shingles\t	3:10	31	1002
611	Drippy Eye	3:13	31	1002
612	Lost, Picking Flowers In The Woods\t	3:21	31	1002
613	Caterpillar House\t	1:58	31	1002
614	Wall Of Gum\t	0:59	31	1002
615	Untitled Roadside Demo\t	3:34	31	1002
616	Untitled\t	3:10	31	1002
700	Constellation Dirtbike Head\t	2:55	40	1003
701	Fresh Hex	1:35	40	1003
702	Mexican Icecream\t	2:21	40	1003
703	Lick the Witch	2:45	40	1003
704	Sweatmother	2:12	40	1003
705	Motorlicker	2:01	40	1003
706	Unholy Demon Rhythms\t	2:29	40	1003
708	Heavy Makeup\t	4:45	40	1003
709	Grape Aerosmith\t	1:51	40	1003
710	New Juices From The Hot Tub Freaks\t	2:06	40	1003
711	Six Royal Vipers\t	2:26	40	1003
712	Overheater\t	1:43	40	1003
713	Creepy Phone Calls\t	4:09	40	1003
714	TV All Greasy\t	3:21	40	1003
715	Stretch Your Face\t	2:45	40	1003
716	Nuclear Waste Aerobics\t	2:56	40	1003
800	Human Om	3:05	41	1003
801	Hong	1:09	41	1003
802	Wipeth Out	1:32	41	1003
803	Gods in Heat	3:21	41	1003
804	Home Invasionaries	2:22	41	1003
805	Dimensional Hum	2:14	41	1003
806	Warlock Mary	2:33	41	1003
807	Suck Viper	1:56	41	1003
808	The Madonna	1:10	41	1003
809	Fantasy Trash Wave	2:47	41	1003
810	Memory Girl	1:50	41	1003
811	Let's Get Worn Away	6:09	41	1003
900	Son Et Lumiere\t	1:35	50	1004
901	Inertiatic ESP\t	4:24	50	1004
902	Roulette Dares (The Haunt Of)\t	7:31	50	1004
903	Tira Me A Las Arañas\t	1:29	50	1004
904	Drunkship Of Lanterns\t	6:20	50	1004
905	Eriatarka	7:06	50	1004
906	Cicatriz ESP\t	12:29	50	1004
907	This Apparatus Must Be Unearthed\t	4:58	50	1004
908	Televators	6:19	50	1004
909	Take The Veil Cerpin Taxt\t	8:42	50	1004
1000	Cygnus....Vismund Cygnus\t	13:02	51	1004
1001	The Widow\t	5:50	51	1004
1002	L' Via L' Viaquez\t	12:21	51	1004
1003	Miranda That Ghost Just Isn't Holy Anymore\t	13:09	51	1004
1004	Cassandra Gemini [I]\t	4:45	51	1004
1005	Cassandra Gemini [II]\t	6:40	51	1004
1006	Cassandra Gemini [III]\t	2:55	51	1004
1007	Cassandra Gemini [IV]\t	7:41	51	1004
1008	Cassandra Gemini [V]\t	4:59	51	1004
1009	Cassandra Gemini [VI]\t	3:48	51	1004
1010	Cassandra Gemini [VII]\t	0:46	51	1004
1011	Cassandra Gemini [VIII]\t	0:53	51	1004
2000	21st Century Schizoid Man 	6:52	60	1005
2001	I Talk To The Wind\t	5:40	60	1005
2002	Epitaph	8:30	60	1005
2003	Moonchild	12:09	60	1005
2004	The Court Of The Crimson King	8:48	60	1005
2100	Peace- A Beginning	0:50	61	1005
2101	Pictures of a city	8:01	61	1005
2102	Cadence and Cascade	4:37	61	1005
2103	\t\nIn the Wake of Poseidon	7:56	61	1005
2104	\t\nPeace - A Theme	1:15	61	1005
2105	Cat Food	4:55	61	1005
2106	The Devil's Triangle	11:34	61	1005
2107	\t\nPeace - An End	1:52	61	1005
\.


--
-- Data for Name: Songwriters; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public."Songwriters" ("ID", "Name", "Song ID", "Album ID", "Artist ID") FROM stdin;
\.


--
-- Name: Albums Albums_pkey; Type: CONSTRAINT; Schema: public; Owner: jmmdgm
--

ALTER TABLE ONLY public."Albums"
    ADD CONSTRAINT "Albums_pkey" PRIMARY KEY ("ID");


--
-- Name: Artists Artists_pkey; Type: CONSTRAINT; Schema: public; Owner: jmmdgm
--

ALTER TABLE ONLY public."Artists"
    ADD CONSTRAINT "Artists_pkey" PRIMARY KEY ("ID");


--
-- Name: Songs SONGS_pkey; Type: CONSTRAINT; Schema: public; Owner: jmmdgm
--

ALTER TABLE ONLY public."Songs"
    ADD CONSTRAINT "SONGS_pkey" PRIMARY KEY ("ID");


--
-- Name: Songwriters Songwriters_pkey; Type: CONSTRAINT; Schema: public; Owner: jmmdgm
--

ALTER TABLE ONLY public."Songwriters"
    ADD CONSTRAINT "Songwriters_pkey" PRIMARY KEY ("ID");


--
-- PostgreSQL database dump complete
--

