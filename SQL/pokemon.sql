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
-- Name: pokemon; Type: TABLE; Schema: public; Owner: jmmdgm
--

CREATE TABLE public.pokemon (
    id integer NOT NULL,
    name character varying,
    type character varying,
    "evolvesFromId" integer
);


ALTER TABLE public.pokemon OWNER TO jmmdgm;

--
-- Name: pokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: jmmdgm
--

CREATE SEQUENCE public.pokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pokemon_id_seq OWNER TO jmmdgm;

--
-- Name: pokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jmmdgm
--

ALTER SEQUENCE public.pokemon_id_seq OWNED BY public.pokemon.id;


--
-- Name: trainers; Type: TABLE; Schema: public; Owner: jmmdgm
--

CREATE TABLE public.trainers (
    id integer,
    name character varying,
    "isGymLeader" boolean,
    "pokemonSlot1" integer,
    "pokemonSlot2" integer,
    "pokemonSlot3" integer,
    "pokemonSlot4" integer,
    "pokemonSlot5" integer,
    "pokemonSlot6" integer
);


ALTER TABLE public.trainers OWNER TO jmmdgm;

--
-- Name: pokemon id; Type: DEFAULT; Schema: public; Owner: jmmdgm
--

ALTER TABLE ONLY public.pokemon ALTER COLUMN id SET DEFAULT nextval('public.pokemon_id_seq'::regclass);


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public.pokemon (id, name, type, "evolvesFromId") FROM stdin;
1	Bulbasaur	Grass	0
2	Ivysaur	Grass	1
3	Venesaur	Grass	2
4	Charmander	Fire	0
5	Charmeleon	Fire	4
6	Charizard	FIre	5
7	Squirtle	Water	0
8	Wartortle	Water	7
9	Blastoise	Water	8
10	Caterpie	Bug	0
11	Metapod	Bug	10
12	Butterfree	Bug	11
\.


--
-- Data for Name: trainers; Type: TABLE DATA; Schema: public; Owner: jmmdgm
--

COPY public.trainers (id, name, "isGymLeader", "pokemonSlot1", "pokemonSlot2", "pokemonSlot3", "pokemonSlot4", "pokemonSlot5", "pokemonSlot6") FROM stdin;
1	Ash	f	1	10	\N	\N	\N	\N
2	Misty	t	7	\N	\N	\N	\N	\N
3	Brock	t	3	6	9	\N	\N	\N
\.


--
-- Name: pokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jmmdgm
--

SELECT pg_catalog.setval('public.pokemon_id_seq', 1, false);


--
-- Name: pokemon pokemon_pkey; Type: CONSTRAINT; Schema: public; Owner: jmmdgm
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

