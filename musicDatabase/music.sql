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
    "ID" integer NOT NULL,
    "NAME" character varying,
    "LENGTH" integer,
    "ALBUM ID" integer,
    "ARTIST ID" integer
);


ALTER TABLE public."Songs" OWNER TO jmmdgm;

--
-- Data for Name: Artists; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public."Artists" ("ID", "NAME") FROM stdin;
\.


--
-- Data for Name: Songs; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public."Songs" ("ID", "NAME", "LENGTH", "ALBUM ID", "ARTIST ID") FROM stdin;
\.


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
-- PostgreSQL database dump complete
--

