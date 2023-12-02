
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '7042152a-7151-49f1-9bfd-3d8f156e7aef', 'authenticated', 'authenticated', 'random@gmail.com', '$2a$10$6bkcCFR9wsUOyXSAijXGO.0wyw4neeRPHtuePu4igBXSAHaBqnfQ.', '2023-10-22 21:37:14.25057+00', NULL, '', NULL, '', NULL, '', '', NULL, '2023-11-06 23:04:07.101986+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2023-10-22 21:37:14.240954+00', '2023-11-06 23:04:07.106022+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);

-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at") VALUES
	('7042152a-7151-49f1-9bfd-3d8f156e7aef', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '{"sub": "7042152a-7151-49f1-9bfd-3d8f156e7aef", "email": "random@gmail.com"}', 'email', '2023-10-22 21:37:14.249029+00', '2023-10-22 21:37:14.24905+00', '2023-10-22 21:37:14.24905+00');


--
-- Data for Name: menus; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."menus" ("id", "name", "user_id", "slug", "background_image_url", "city", "address", "is_published", "updated_at", "created_at", "contact_number") VALUES
	('dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', 'Shawerma Klub Haus', '7042152a-7151-49f1-9bfd-3d8f156e7aef', 'shawerma-klub-haus-krak-w-931', 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/menu/dce57fbd-29dc-47a2-9a45-3a0dcc10c95a?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvbWVudS9kY2U1N2ZiZC0yOWRjLTQ3YTItOWE0NS0zYTBkY2MxMGM5NWEiLCJpYXQiOjE2OTgwMTA2NjUsImV4cCI6MjY5ODAxMDY2NH0.z6bQdmPwlA7VLZDbUAVGkf_6hKzIgd7XYFOehY6Erow', 'Kraków', 'Prusa', false, '2023-10-22 21:37:45.205+00', '2023-10-22 21:37:45.205+00', '123123123');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories" ("id", "menu_id", "created_at") VALUES
	('8a004237-33ac-45a2-854e-00ee3d0d3b03', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '2023-10-25 10:48:09.381+00'),
	('d4140553-1136-4a0a-bcb7-936843a4b3eb', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '2023-10-25 17:56:02.313+00'),
	('ee14c0d7-e831-4124-9d82-b0b3a843e596', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '2023-10-26 16:44:00.595+00'),
	('4bade4af-2b56-43b4-be54-0fa8eefb3990', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '2023-10-26 17:06:13.724+00'),
	('14a26a98-8e3b-4e17-9c73-ecebad43d2d5', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '2023-10-26 17:07:39.203+00');


--
-- Data for Name: languages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."languages" ("id", "name", "iso_code", "flag_url") VALUES
	('56ef000f-2a05-41ab-bbfa-6f1a619306ed', 'English', 'GB', 'https://flagsapi.com/GB/flat/64.png'),
	('1fc3ba53-8dcb-4f1e-807b-f8655384f944', 'Afar', 'DJ', 'https://flagsapi.com/DJ/flat/64.png'),
	('0754133c-0c7d-4c66-a26e-5c07922d12ad', 'Abkhazian', 'GE', 'https://flagsapi.com/GE/flat/64.png'),
	('6a373f45-a818-402b-b990-958fa74d666c', 'Afrikaans', 'ZA', 'https://flagsapi.com/ZA/flat/64.png'),
	('b5e11ba1-c2f9-4275-8353-27b32a0efc50', 'Amharic', 'ET', 'https://flagsapi.com/ET/flat/64.png'),
	('70ea2f77-b6f7-49a7-9ad0-02a1a7913d8a', 'Arabic', 'AE', 'https://flagsapi.com/AE/flat/64.png'),
	('f1ab07aa-38c6-47a5-aaed-63ad02e82afd', 'Assamese', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('c635e92d-37c1-436b-859c-142302459723', 'Aymara', 'BO', 'https://flagsapi.com/BO/flat/64.png'),
	('14f1ba6a-c319-4144-a262-bf2010e92b61', 'Azerbaijani', 'AZ', 'https://flagsapi.com/AZ/flat/64.png'),
	('674dcc79-109a-442a-a62e-b2dfcf9cd0c4', 'Bashkir', 'RU', 'https://flagsapi.com/RU/flat/64.png'),
	('729f7b4d-c06a-4152-86be-cfd6cba6d282', 'Belarusian', 'BY', 'https://flagsapi.com/BY/flat/64.png'),
	('7a32c160-37a5-4e8c-90e6-1d734925e8f5', 'Bulgarian', 'BG', 'https://flagsapi.com/BG/flat/64.png'),
	('e381d2ef-ed64-4bc4-aa1d-e64231e49161', 'Bihari', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('a5918e08-05b8-4e5f-a0b8-8d70d821aad6', 'Bislama', 'VU', 'https://flagsapi.com/VU/flat/64.png'),
	('d175a717-bb62-4973-ae2b-cf84ba37b2ce', 'Bengali/Bangla', 'BD', 'https://flagsapi.com/BD/flat/64.png'),
	('92a332c6-8b2e-4fa5-ae85-30786e69f616', 'Tibetan', 'CN', 'https://flagsapi.com/CN/flat/64.png'),
	('5f672e94-92bc-406a-b446-effbdcfb40fb', 'Breton', 'FR', 'https://flagsapi.com/FR/flat/64.png'),
	('199cb522-9906-44da-b3b4-9fed783428e7', 'Catalan', 'ES', 'https://flagsapi.com/ES/flat/64.png'),
	('6c6da6ff-b118-4c7b-ac93-4cf092dd1106', 'Corsican', 'FR', 'https://flagsapi.com/FR/flat/64.png'),
	('2bc0154f-4721-4d23-ae85-74a565e77977', 'Czech', 'CZ', 'https://flagsapi.com/CZ/flat/64.png'),
	('6dc59a67-98b1-4f62-a7d0-f8dd7997e02f', 'Welsh', 'GB', 'https://flagsapi.com/GB/flat/64.png'),
	('89cc793f-f048-4992-82dc-ef4347612e7d', 'Danish', 'DK', 'https://flagsapi.com/DK/flat/64.png'),
	('868e5bfd-cde2-4ba8-b79d-0c2773bc410b', 'German', 'DE', 'https://flagsapi.com/DE/flat/64.png'),
	('b23bc51d-78b6-452a-afd2-108f11a1456c', 'Bhutani', 'BT', 'https://flagsapi.com/BT/flat/64.png'),
	('23058c7e-0447-45dd-b7cf-9c9518e2af24', 'Greek', 'GR', 'https://flagsapi.com/GR/flat/64.png'),
	('88cc8bae-c8aa-4a4f-a603-9eeb0226e1a1', 'Esperanto', 'EH', 'https://flagsapi.com/EH/flat/64.png'),
	('8bc9685e-fffa-4607-a844-0e8f879f30c8', 'Spanish', 'ES', 'https://flagsapi.com/ES/flat/64.png'),
	('853785b1-d5ab-4e53-8296-3d85c8e8a272', 'Estonian', 'EE', 'https://flagsapi.com/EE/flat/64.png'),
	('998d2d37-f0ac-4d7a-bbcb-1bed2961691d', 'Basque', 'ES', 'https://flagsapi.com/ES/flat/64.png'),
	('d2eab232-1452-4770-a52d-d97cbce3c288', 'Persian', 'IR', 'https://flagsapi.com/IR/flat/64.png'),
	('5de1a4b1-0686-4764-b660-a72b9ac4fcc7', 'Finnish', 'FI', 'https://flagsapi.com/FI/flat/64.png'),
	('185d564b-b173-4a6c-97e9-1562220b7e45', 'Fiji', 'FJ', 'https://flagsapi.com/FJ/flat/64.png'),
	('31528d48-e412-4051-98cf-0e7f741f691a', 'Faeroese', 'FO', 'https://flagsapi.com/FO/flat/64.png'),
	('ced37313-fc91-4c4d-a480-5d8081311a8e', 'French', 'FR', 'https://flagsapi.com/FR/flat/64.png'),
	('8bdd9651-2a75-4033-a496-e9f1d2511135', 'Frisian', 'NL', 'https://flagsapi.com/NL/flat/64.png'),
	('3d43c1e6-abcc-49b4-9c80-24bb924f7f76', 'Irish', 'IE', 'https://flagsapi.com/IE/flat/64.png'),
	('33adc815-9636-46aa-bdb5-4cb06594cfaf', 'Scots/Gaelic', 'GB', 'https://flagsapi.com/GB/flat/64.png'),
	('51aa8bb1-057a-494a-a587-bc56d3f60e3e', 'Galician', 'ES', 'https://flagsapi.com/ES/flat/64.png'),
	('8a332e8a-7fd5-47b9-a4ca-740cfc89d0fa', 'Guarani', 'PY', 'https://flagsapi.com/PY/flat/64.png'),
	('5080d91a-d0df-458d-b0a7-18cb43aebfd7', 'Gujarati', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('8d2b6e75-6aa0-46c6-842a-322f901372e2', 'Hausa', 'NG', 'https://flagsapi.com/NG/flat/64.png'),
	('c7d97bc2-d129-4c80-b63e-d779d8437829', 'Hindi', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('451547b0-e24e-458d-9443-fead0f058d8b', 'Croatian', 'HR', 'https://flagsapi.com/HR/flat/64.png'),
	('df2a068b-0e5f-4d9a-8515-34fd0b448203', 'Hungarian', 'HU', 'https://flagsapi.com/HU/flat/64.png'),
	('16cf16e4-a55f-4d01-a68d-3462e7d357d5', 'Armenian', 'AM', 'https://flagsapi.com/AM/flat/64.png'),
	('ff9e52dc-2afb-4512-9566-e4d54a56c712', 'Interlingua', 'EU', 'https://flagsapi.com/EU/flat/64.png'),
	('f0862ed9-1e56-4f06-8708-134fc3215c0a', 'Interlingue', 'EU', 'https://flagsapi.com/EU/flat/64.png'),
	('b3d7a1c6-bd47-4cd1-b706-4485841cc49d', 'Inupiak', 'US', 'https://flagsapi.com/US/flat/64.png'),
	('b729632e-dd23-4396-9f1f-5516fb34a9c4', 'Indonesian', 'ID', 'https://flagsapi.com/ID/flat/64.png'),
	('87c51f03-5a90-443a-a21f-6db728d97766', 'Icelandic', 'IS', 'https://flagsapi.com/IS/flat/64.png'),
	('e39231e9-25be-4ec6-9678-9030ee1860f6', 'Italian', 'IT', 'https://flagsapi.com/IT/flat/64.png'),
	('70330e9b-2e39-4381-a9ab-33c7156450b3', 'Hebrew', 'IL', 'https://flagsapi.com/IL/flat/64.png'),
	('36e08a21-7257-4576-8741-e52639eb83ea', 'Japanese', 'JP', 'https://flagsapi.com/JP/flat/64.png'),
	('27532326-22fc-4c1a-a915-47c653b34492', 'Yiddish', 'IL', 'https://flagsapi.com/IL/flat/64.png'),
	('bc9f22c0-2dca-471c-88b1-3a964198c55b', 'Javanese', 'ID', 'https://flagsapi.com/ID/flat/64.png'),
	('28a7f516-6d19-418e-9aa2-b70f15a987e6', 'Georgian', 'GE', 'https://flagsapi.com/GE/flat/64.png'),
	('056aa38c-2b0b-44d1-8f82-c709dc8d503a', 'Kazakh', 'KZ', 'https://flagsapi.com/KZ/flat/64.png'),
	('7a8edc04-8e79-4bb6-8504-e16ae0ef5f69', 'Greenlandic', 'GL', 'https://flagsapi.com/GL/flat/64.png'),
	('e8f91d03-fce3-4b44-8594-c77a224ae8bb', 'Cambodian', 'KH', 'https://flagsapi.com/KH/flat/64.png'),
	('aca8a0d9-fc75-4f44-973b-2e15988b7134', 'Kannada', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('00a7484f-bfe6-4170-8716-6e6130fa8ead', 'Korean', 'KR', 'https://flagsapi.com/KR/flat/64.png'),
	('75de096a-c480-4017-8ac1-c37b885143e7', 'Kashmiri', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('142aee12-9269-4b85-9fdb-1a236cba7bf5', 'Kurdish', 'TR', 'https://flagsapi.com/TR/flat/64.png'),
	('d8769566-5fec-4bfb-b6fa-09cf17acec7f', 'Kirghiz', 'KG', 'https://flagsapi.com/KG/flat/64.png'),
	('f9c6aa78-b9e4-4567-8eac-81a248a742ec', 'Latin', 'VA', 'https://flagsapi.com/VA/flat/64.png'),
	('a69a72fc-85f8-4837-b648-884153e8eb2d', 'Lingala', 'CD', 'https://flagsapi.com/CD/flat/64.png'),
	('af825945-ddff-4fa9-99d5-f8240efe2d85', 'Laothian', 'LA', 'https://flagsapi.com/LA/flat/64.png'),
	('faa3a172-b35e-4cc0-bc4e-c72732c9354e', 'Lithuanian', 'LT', 'https://flagsapi.com/LT/flat/64.png'),
	('e9726a19-4937-471f-a5f5-65568bfe3713', 'Latvian/Lettish', 'LV', 'https://flagsapi.com/LV/flat/64.png'),
	('dfd9702e-2435-400d-9e88-55733189003a', 'Malagasy', 'MG', 'https://flagsapi.com/MG/flat/64.png'),
	('0e472846-b47d-4b08-b367-ebd9858742c8', 'Maori', 'NZ', 'https://flagsapi.com/NZ/flat/64.png'),
	('12259902-c14b-4f40-abe1-84c0a0fafd45', 'Macedonian', 'MK', 'https://flagsapi.com/MK/flat/64.png'),
	('6c0d8578-cdbe-4045-95ae-236e16a4a282', 'Malayalam', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('837a72c6-7af0-41d4-8e70-72eed1e6d21e', 'Mongolian', 'MN', 'https://flagsapi.com/MN/flat/64.png'),
	('743f85f8-818b-4448-a627-8f8a3bd4e0f3', 'Moldavian', 'MD', 'https://flagsapi.com/MD/flat/64.png'),
	('ae665924-5e6d-4eb0-8ee0-a7bfe61187af', 'Marathi', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('5cc36831-33f0-418d-a358-d7e047407277', 'Malay', 'MY', 'https://flagsapi.com/MY/flat/64.png'),
	('6f5a7abd-268b-4115-9808-6db55813edf8', 'Maltese', 'MT', 'https://flagsapi.com/MT/flat/64.png'),
	('520040b6-9fd2-4128-8805-f54d70513bff', 'Burmese', 'MM', 'https://flagsapi.com/MM/flat/64.png'),
	('e51d302b-a319-4f1d-bf56-be4f56d76c45', 'Nauru', 'NR', 'https://flagsapi.com/NR/flat/64.png'),
	('15f833dd-a6ca-4ca8-ac90-1b95591e3abd', 'Nepali', 'NP', 'https://flagsapi.com/NP/flat/64.png'),
	('750af890-cad5-43d4-a01f-711213dafccc', 'Dutch', 'NL', 'https://flagsapi.com/NL/flat/64.png'),
	('3a842f57-39ec-4388-8495-0557d3981bd5', 'Norwegian', 'NO', 'https://flagsapi.com/NO/flat/64.png'),
	('acec49bd-f7f8-4302-934b-592961af4f5f', 'Occitan', 'FR', 'https://flagsapi.com/FR/flat/64.png'),
	('1e6f1dc8-e7ef-4c98-9588-750bbaddcf32', 'Punjabi', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('c513f49c-7153-43dd-b824-d059c858a0e5', 'Polish', 'PL', 'https://flagsapi.com/PL/flat/64.png'),
	('e3505828-301e-4f42-b79f-11613f4b367e', 'Pashto/Pushto', 'AF', 'https://flagsapi.com/AF/flat/64.png'),
	('cef07284-0743-4310-bd4f-e16c6331f818', 'Portuguese', 'PT', 'https://flagsapi.com/PT/flat/64.png'),
	('26368695-99e5-4279-b3ba-f1afb50fdc16', 'Quechua', 'PE', 'https://flagsapi.com/PE/flat/64.png'),
	('2f8307c8-81fd-4b41-b1eb-334f50b1bd58', 'Rhaeto-Romance', 'CH', 'https://flagsapi.com/CH/flat/64.png'),
	('71737981-e23d-40af-8b1e-a94fd6b4fcc6', 'Kirundi', 'BI', 'https://flagsapi.com/BI/flat/64.png'),
	('fce3af73-fdd7-48df-8f7d-b2b63a4168b4', 'Romanian', 'RO', 'https://flagsapi.com/RO/flat/64.png'),
	('3c5609dd-e2f2-49ff-b0fd-93a7e53f711d', 'Russian', 'RU', 'https://flagsapi.com/RU/flat/64.png'),
	('3c0c7525-9be3-443f-bf64-87d1e3f1be81', 'Kinyarwanda', 'RW', 'https://flagsapi.com/RW/flat/64.png'),
	('63a0b711-dd56-469e-80cd-2b326dd11350', 'Sanskrit', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('3de245e5-99e5-4d1c-b2d2-75b2d4d73c8b', 'Sindhi', 'PK', 'https://flagsapi.com/PK/flat/64.png'),
	('d55a8a7f-d929-4151-8603-7c92667764d8', 'Sangro', 'IT', 'https://flagsapi.com/IT/flat/64.png'),
	('8de0cd5a-c58c-4290-be14-81f13f9aa4e3', 'Serbo-Croatian', 'YU', 'https://flagsapi.com/YU/flat/64.png'),
	('18e8b7fb-32df-4b10-bad1-3c80159fa2f2', 'Singhalese', 'LK', 'https://flagsapi.com/LK/flat/64.png'),
	('6698e74f-7e18-4e6d-b4a0-de2efbde91a3', 'Slovak', 'SK', 'https://flagsapi.com/SK/flat/64.png'),
	('c5d74511-7f1c-4d84-9ba6-97b71166b670', 'Slovenian', 'SI', 'https://flagsapi.com/SI/flat/64.png'),
	('1375445f-f19f-40c3-8ac0-b6050c416ce4', 'Samoan', 'WS', 'https://flagsapi.com/WS/flat/64.png'),
	('bd06f2c2-6afc-47c4-b11d-2f5ac009625e', 'Shona', 'ZW', 'https://flagsapi.com/ZW/flat/64.png'),
	('a6de8fef-c371-459b-bfff-acb2b15b3e2b', 'Somali', 'SO', 'https://flagsapi.com/SO/flat/64.png'),
	('6eca9917-912f-40dd-9cf1-de9e19a6b3bc', 'Albanian', 'AL', 'https://flagsapi.com/AL/flat/64.png'),
	('7c06ee39-f229-401b-bf41-06f9070ff537', 'Serbian', 'RS', 'https://flagsapi.com/RS/flat/64.png'),
	('a0be1438-ad12-4a0a-b4b4-3022e8b8ad74', 'Siswati', 'SZ', 'https://flagsapi.com/SZ/flat/64.png'),
	('2f04e898-2548-48b1-8f42-4fc6830b2708', 'Sesotho', 'LS', 'https://flagsapi.com/LS/flat/64.png'),
	('3ec08200-4333-4481-b4c7-068b7722a901', 'Sundanese', 'ID', 'https://flagsapi.com/ID/flat/64.png'),
	('9e6bb3d0-13ef-4431-9a35-1178d9fcf7f5', 'Swedish', 'SE', 'https://flagsapi.com/SE/flat/64.png'),
	('2b62abdf-a689-43bb-b7cc-f325af66f4ab', 'Swahili', 'TZ', 'https://flagsapi.com/TZ/flat/64.png'),
	('bc904072-0599-471f-970d-b74a71a6032a', 'Tamil', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('606df57e-37ec-44ad-8576-32c152d8e5fa', 'Telugu', 'IN', 'https://flagsapi.com/IN/flat/64.png'),
	('a7e20192-dc4e-4160-8a02-c0969828a714', 'Tajik', 'TJ', 'https://flagsapi.com/TJ/flat/64.png'),
	('db35a7f1-45bf-4b36-8ecf-588286af19f2', 'Thai', 'TH', 'https://flagsapi.com/TH/flat/64.png'),
	('e12e3974-5665-4fab-b50d-82ff639b5f07', 'Tigrinya', 'ER', 'https://flagsapi.com/ER/flat/64.png'),
	('e684961a-f3eb-4a75-8e74-35ac6b7813a7', 'Turkmen', 'TM', 'https://flagsapi.com/TM/flat/64.png'),
	('afc061ca-8f85-4fa7-add2-b60544526d6d', 'Tagalog', 'PH', 'https://flagsapi.com/PH/flat/64.png'),
	('52701ab0-f28e-404e-8f6a-9f73482f4d97', 'Setswana', 'BW', 'https://flagsapi.com/BW/flat/64.png'),
	('a144745c-7c77-470f-926b-7ae807092362', 'Tonga', 'TO', 'https://flagsapi.com/TO/flat/64.png'),
	('77b39a56-b151-4f3d-8048-7633d71cdc6c', 'Turkish', 'TR', 'https://flagsapi.com/TR/flat/64.png'),
	('5c53e32e-c0e8-4881-8c32-e7eb065362bb', 'Tsonga', 'ZA', 'https://flagsapi.com/ZA/flat/64.png'),
	('dfd304e1-e045-4172-922b-044bf9dedecb', 'Tatar', 'RU', 'https://flagsapi.com/RU/flat/64.png'),
	('91b72c31-8f72-428e-9c31-c34a510562c4', 'Twi', 'GH', 'https://flagsapi.com/GH/flat/64.png'),
	('b9a53187-e879-4062-b7a6-d0cc1735d43c', 'Ukrainian', 'UA', 'https://flagsapi.com/UA/flat/64.png'),
	('3b6dbb33-aacf-44a6-847f-e99e309bb426', 'Urdu', 'PK', 'https://flagsapi.com/PK/flat/64.png'),
	('2ec45a29-818f-4871-83d0-c3e71993504c', 'Uzbek', 'UZ', 'https://flagsapi.com/UZ/flat/64.png'),
	('96033923-5552-431d-8586-7e1f73c3bc3b', 'Vietnamese', 'VN', 'https://flagsapi.com/VN/flat/64.png'),
	('cd3f7089-353f-4b0c-846d-5d55156c8b83', 'Volapuk', 'EU', 'https://flagsapi.com/EU/flat/64.png'),
	('43711099-b6fe-4f8b-8016-bdfdc6c98cab', 'Wolof', 'SN', 'https://flagsapi.com/SN/flat/64.png'),
	('042b60a2-c1ec-4134-aa78-388341df26c8', 'Xhosa', 'ZA', 'https://flagsapi.com/ZA/flat/64.png'),
	('4f9850b0-e495-4e29-9ecc-227bf98083cf', 'Yoruba', 'NG', 'https://flagsapi.com/NG/flat/64.png'),
	('349e5acc-ff1b-47d3-b048-6714a5dfe6bd', 'Chinese', 'CN', 'https://flagsapi.com/CN/flat/64.png'),
	('4df6db94-a499-4bed-9f99-acdfe2b001f9', 'Zulu', 'ZA', 'https://flagsapi.com/ZA/flat/64.png');


--
-- Data for Name: categories_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories_translation" ("category_id", "name", "language_id") VALUES
	('8a004237-33ac-45a2-854e-00ee3d0d3b03', 'Kebab', 'c513f49c-7153-43dd-b824-d059c858a0e5'),
	('d4140553-1136-4a0a-bcb7-936843a4b3eb', 'Napoje', 'c513f49c-7153-43dd-b824-d059c858a0e5'),
	('ee14c0d7-e831-4124-9d82-b0b3a843e596', 'Zestawy', 'c513f49c-7153-43dd-b824-d059c858a0e5'),
	('4bade4af-2b56-43b4-be54-0fa8eefb3990', 'Tradycyjne', 'c513f49c-7153-43dd-b824-d059c858a0e5'),
	('14a26a98-8e3b-4e17-9c73-ecebad43d2d5', 'Burgery', 'c513f49c-7153-43dd-b824-d059c858a0e5');


--
-- Data for Name: dishes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."dishes" ("id", "price", "picture_url", "created_at", "menu_id", "category_id", "carbohydrates", "fats", "protein", "weight", "calories") VALUES
	('94ac4e49-3750-455a-ac96-526573fd666c', 1200, NULL, '2023-10-22 22:51:18.312+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', NULL, NULL, NULL, NULL, NULL, NULL),
	('201a1d71-c828-4b86-b312-c8b198cb1efd', 3300, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/201a1d71-c828-4b86-b312-c8b198cb1efd?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC8yMDFhMWQ3MS1jODI4LTRiODYtYjMxMi1jOGIxOThjYjFlZmQiLCJpYXQiOjE2OTgwMTM3NzMsImV4cCI6MjY5ODAxMzc3Mn0.m86R09JrUZQDHy9A7OOJ-UL3w_KHQSm0j_lExi3kA-0', '2023-10-22 22:29:33.087+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '8a004237-33ac-45a2-854e-00ee3d0d3b03', NULL, NULL, NULL, NULL, NULL),
	('cd98ede6-3544-49c2-93c2-54a5e62709bd', 3225, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/cd98ede6-3544-49c2-93c2-54a5e62709bd?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC9jZDk4ZWRlNi0zNTQ0LTQ5YzItOTNjMi01NGE1ZTYyNzA5YmQiLCJpYXQiOjE2OTgyNTYzMjIsImV4cCI6MjY5ODI1NjMyMX0.iAjEst8gMRsimwvttNXKN1nqP39gKOWg5DHEdVH8500', '2023-10-25 17:52:02.571+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '8a004237-33ac-45a2-854e-00ee3d0d3b03', 34, 55, 24, NULL, 500),
	('5fa64535-6966-48c3-97f1-c7c7060a8269', 1200, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/5fa64535-6966-48c3-97f1-c7c7060a8269?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC81ZmE2NDUzNS02OTY2LTQ4YzMtOTdmMS1jN2M3MDYwYTgyNjkiLCJpYXQiOjE2OTgyNTY0MTYsImV4cCI6MjY5ODI1NjQxNX0.NE4ZQdD_wOLXP10n9NJ3AwS6AbJeEQk3pddw9UYL45U', '2023-10-25 17:53:36.826+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', NULL, NULL, NULL, NULL, NULL, NULL),
	('2dd2eb7c-1016-4693-b220-fa2154a5965c', 800, NULL, '2023-10-25 17:56:29.023+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', 'd4140553-1136-4a0a-bcb7-936843a4b3eb', NULL, NULL, NULL, NULL, NULL),
	('86aa5671-89d0-4b0b-941d-b2d128b1d4d5', 800, NULL, '2023-10-25 17:56:37.028+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', 'd4140553-1136-4a0a-bcb7-936843a4b3eb', NULL, NULL, NULL, NULL, NULL),
	('c63b7ea0-acdc-4a13-afdf-46645bc2516b', 800, NULL, '2023-10-25 17:56:42.686+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', 'd4140553-1136-4a0a-bcb7-936843a4b3eb', NULL, NULL, NULL, NULL, NULL),
	('33f893a6-322e-4fd5-915f-6e792cc83eaa', 3550, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/33f893a6-322e-4fd5-915f-6e792cc83eaa?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC8zM2Y4OTNhNi0zMjJlLTRmZDUtOTE1Zi02ZTc5MmNjODNlYWEiLCJpYXQiOjE2OTgyNjEwODAsImV4cCI6MjY5ODI2MTA3OX0.ec2VhPRZoFIAZPnjLzA9h1r90y1nwyh23uoAOSdZnAY', '2023-10-25 19:11:20.77+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '8a004237-33ac-45a2-854e-00ee3d0d3b03', NULL, NULL, NULL, NULL, NULL),
	('1c4e69eb-373e-4fe2-91a4-89fd7c015d4a', 3100, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/1c4e69eb-373e-4fe2-91a4-89fd7c015d4a?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC8xYzRlNjllYi0zNzNlLTRmZTItOTFhNC04OWZkN2MwMTVkNGEiLCJpYXQiOjE2OTgzMzg3MzMsImV4cCI6MjY5ODMzODczMn0.HDJ5hgn2jRmRStQc-ijufjhcgxWuvNzOAR4Lc7aQ3a0', '2023-10-26 16:45:33.556+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', 'ee14c0d7-e831-4124-9d82-b0b3a843e596', NULL, NULL, NULL, NULL, NULL),
	('c2c8e246-e1b7-456a-ad94-6c29e9d3337e', 1500, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/c2c8e246-e1b7-456a-ad94-6c29e9d3337e?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC9jMmM4ZTI0Ni1lMWI3LTQ1NmEtYWQ5NC02YzI5ZTlkMzMzN2UiLCJpYXQiOjE2OTgzMzg4MzMsImV4cCI6MjY5ODMzODgzMn0.VzSuLPUpaegfzkhWetHASrtFrEJkELOxXgFzd0ulX4w', '2023-10-26 16:47:13.307+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', NULL, NULL, NULL, NULL, NULL, NULL),
	('cea72e87-492c-437b-9eb1-5a08c0c1381d', 3800, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/cea72e87-492c-437b-9eb1-5a08c0c1381d?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC9jZWE3MmU4Ny00OTJjLTQzN2ItOWViMS01YTA4YzBjMTM4MWQiLCJpYXQiOjE2OTgzNDAwMzksImV4cCI6MjY5ODM0MDAzOH0.hxSRrK_lY_y4L_mQ3XwaZGS1-CFa-OG3RPKtCGkDJIM', '2023-10-26 17:07:19.806+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '4bade4af-2b56-43b4-be54-0fa8eefb3990', NULL, NULL, NULL, NULL, NULL),
	('69d2c84f-3056-4e0b-b130-df33a5d6f18f', 4400, 'http://localhost:34321/storage/v1/object/sign/menus-files/7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/69d2c84f-3056-4e0b-b130-df33a5d6f18f?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtZW51cy1maWxlcy83MDQyMTUyYS03MTUxLTQ5ZjEtOWJmZC0zZDhmMTU2ZTdhZWYvZGlzaC82OWQyYzg0Zi0zMDU2LTRlMGItYjEzMC1kZjMzYTVkNmYxOGYiLCJpYXQiOjE2OTgzNDAxMDAsImV4cCI6MjY5ODM0MDA5OX0.Vp5Ki_TP8SNXaoWtYpQ6icA4RZt6GHb9Nx3mFUx7DIo', '2023-10-26 17:08:20.508+00', 'dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '14a26a98-8e3b-4e17-9c73-ecebad43d2d5', NULL, NULL, NULL, NULL, NULL);


--
-- Data for Name: dish_variants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."dish_variants" ("id", "price", "dish_id", "created_at") VALUES
	('0253a1ac-bc0d-43c1-82d4-179c12f4d127', 3500, '201a1d71-c828-4b86-b312-c8b198cb1efd', '2023-10-22 22:37:40.584+00'),
	('9961c225-6f87-45b9-a04a-89bd046b730d', 1220, 'cd98ede6-3544-49c2-93c2-54a5e62709bd', '2023-10-25 17:52:19.725+00'),
	('d5b8fd89-3020-4657-bf2a-0a51be642069', 3555, 'cd98ede6-3544-49c2-93c2-54a5e62709bd', '2023-10-25 17:52:39.021+00');


--
-- Data for Name: dishes_tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."dishes_tag" ("dish_id", "tag_name") VALUES
	('cd98ede6-3544-49c2-93c2-54a5e62709bd', 'high_fiber'),
	('1c4e69eb-373e-4fe2-91a4-89fd7c015d4a', 'vegan'),
	('1c4e69eb-373e-4fe2-91a4-89fd7c015d4a', 'vegetarian');


--
-- Data for Name: dishes_translation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."dishes_translation" ("dish_id", "language_id", "name", "description") VALUES
	('94ac4e49-3750-455a-ac96-526573fd666c', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Pierogi Ruskie', 'Pierogi Ruskie'),
	('201a1d71-c828-4b86-b312-c8b198cb1efd', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Kapsalon Shawerma', 'Kapsalon, mięso, surówka, warzywa, sos.'),
	('cd98ede6-3544-49c2-93c2-54a5e62709bd', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Kebab Bułka', 'Mieso, bulka, warzywa, sos'),
	('5fa64535-6966-48c3-97f1-c7c7060a8269', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Frytki', 'Frytki'),
	('2dd2eb7c-1016-4693-b220-fa2154a5965c', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Coca cola', NULL),
	('86aa5671-89d0-4b0b-941d-b2d128b1d4d5', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Coca Cola Zero', NULL),
	('c63b7ea0-acdc-4a13-afdf-46645bc2516b', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Fanta', NULL),
	('33f893a6-322e-4fd5-915f-6e792cc83eaa', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Kebab PIta', 'Mieso, pita, warzywa, sos'),
	('1c4e69eb-373e-4fe2-91a4-89fd7c015d4a', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Zestaw Vegan', NULL),
	('c2c8e246-e1b7-456a-ad94-6c29e9d3337e', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Frytki z serem', NULL),
	('cea72e87-492c-437b-9eb1-5a08c0c1381d', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Kabuli', 'Ryż, warzywa, mięso'),
	('69d2c84f-3056-4e0b-b130-df33a5d6f18f', 'c513f49c-7153-43dd-b824-d059c858a0e5', 'Burger z wołowiną 200g', NULL);


--
-- Data for Name: menu_languages; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."menu_languages" ("menu_id", "language_id", "is_default") VALUES
	('dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', 'c513f49c-7153-43dd-b824-d059c858a0e5', true);


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: variant_translations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."variant_translations" ("language_id", "dish_variant_id", "name", "description") VALUES
	('c513f49c-7153-43dd-b824-d059c858a0e5', '0253a1ac-bc0d-43c1-82d4-179c12f4d127', 'Z wolowina', 'Z miesem wolowym'),
	('c513f49c-7153-43dd-b824-d059c858a0e5', '9961c225-6f87-45b9-a04a-89bd046b730d', 'Z wolowina', 'Z miesem wolowym'),
	('c513f49c-7153-43dd-b824-d059c858a0e5', 'd5b8fd89-3020-4657-bf2a-0a51be642069', 'Bez bulki', 'To samo bez bulki');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types") VALUES
	('menus-files', 'menus-files', NULL, '2023-10-22 21:33:20.142809+00', '2023-10-22 21:33:20.142809+00', false, false, NULL, NULL) ON CONFLICT (id) DO NOTHING;


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version") VALUES
	('cabc1e69-8f5c-4a0d-bf4c-1db7ba6e291e', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/menu/dce57fbd-29dc-47a2-9a45-3a0dcc10c95a', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-22 21:37:45.322525+00', '2023-10-22 21:37:45.322525+00', '2023-10-22 21:37:45.322525+00', '{"eTag": "\"495387963ef17aeadea3de110bf3f4a9\"", "size": 12304, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-22T21:37:45.316Z", "contentLength": 12304, "httpStatusCode": 200}', '8c940e87-6eb7-4a92-9db8-8673fb9544db'),
	('a9ffe839-1cdd-406a-8ec2-71ec76cab295', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/201a1d71-c828-4b86-b312-c8b198cb1efd', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-22 22:29:33.218295+00', '2023-10-22 22:29:33.218295+00', '2023-10-22 22:29:33.218295+00', '{"eTag": "\"f82279aa5119e647b52b1f84c7950d2a\"", "size": 17738, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-22T22:29:33.214Z", "contentLength": 17738, "httpStatusCode": 200}', '2dcd0bc3-e88b-4862-87a3-f47ca2bf4d55'),
	('95082bb8-cf26-4fca-90c8-e723a4814fdc', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/cd98ede6-3544-49c2-93c2-54a5e62709bd', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-25 17:52:02.668359+00', '2023-10-25 17:52:02.668359+00', '2023-10-25 17:52:02.668359+00', '{"eTag": "\"f82279aa5119e647b52b1f84c7950d2a\"", "size": 17738, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-25T17:52:02.663Z", "contentLength": 17738, "httpStatusCode": 200}', '9d406f06-aabd-4d2e-a646-2ec75ae2de33'),
	('20795201-d367-42cf-b05d-c35452d1f96b', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/5fa64535-6966-48c3-97f1-c7c7060a8269', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-25 17:53:36.940889+00', '2023-10-25 17:53:36.940889+00', '2023-10-25 17:53:36.940889+00', '{"eTag": "\"0136ff3ded57baa9713310a8a14d813f\"", "size": 5228, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-25T17:53:36.938Z", "contentLength": 5228, "httpStatusCode": 200}', 'b043a17b-1a9c-4b5c-84b0-c4c82893d3c5'),
	('c0ffcc6f-23ba-414b-aa47-da65f6351b59', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/33f893a6-322e-4fd5-915f-6e792cc83eaa', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-25 19:11:20.8868+00', '2023-10-25 19:11:20.8868+00', '2023-10-25 19:11:20.8868+00', '{"eTag": "\"f82279aa5119e647b52b1f84c7950d2a\"", "size": 17738, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-25T19:11:20.884Z", "contentLength": 17738, "httpStatusCode": 200}', '591886b2-bc90-40eb-9e35-498884ac58d7'),
	('90c42205-6edd-4070-a48e-abf470bd72a4', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/6865df73-9bba-4a0d-bcd5-cddd4152574b', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-25 21:31:57.916879+00', '2023-10-25 21:31:57.916879+00', '2023-10-25 21:31:57.916879+00', '{"eTag": "\"f4e3757db93e3d97654c0498b30b1c2e\"", "size": 87150, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-25T21:31:57.914Z", "contentLength": 87150, "httpStatusCode": 200}', '7f17996b-6453-4846-b6dc-3e6c23fbaa67'),
	('112d4bd7-5d15-49f8-b9d1-dd04f3df48f8', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/1c4e69eb-373e-4fe2-91a4-89fd7c015d4a', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-26 16:45:33.766345+00', '2023-10-26 16:45:33.766345+00', '2023-10-26 16:45:33.766345+00', '{"eTag": "\"3a8cf3e412eee8acec21598c958a1327\"", "size": 200742, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-26T16:45:33.757Z", "contentLength": 200742, "httpStatusCode": 200}', '2c5a7ccb-3689-4416-b065-b17343718426'),
	('b005b26e-2c45-413a-a455-a52d2a00ae98', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/c2c8e246-e1b7-456a-ad94-6c29e9d3337e', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-26 16:47:13.423749+00', '2023-10-26 16:47:13.423749+00', '2023-10-26 16:47:13.423749+00', '{"eTag": "\"5e88f2137b2a39b73c97bb40c784085e\"", "size": 27363, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-26T16:47:13.420Z", "contentLength": 27363, "httpStatusCode": 200}', 'abda3b0f-877e-4024-8c3a-0b44eaff9763'),
	('53776535-8581-4c5b-b797-301a05d366fc', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/cea72e87-492c-437b-9eb1-5a08c0c1381d', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-26 17:07:19.911665+00', '2023-10-26 17:07:19.911665+00', '2023-10-26 17:07:19.911665+00', '{"eTag": "\"d3e087009a78ee1c541e46074b919b0f\"", "size": 180560, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-26T17:07:19.905Z", "contentLength": 180560, "httpStatusCode": 200}', '9ad1c996-5362-48d9-b2b6-2db4c1233cfd'),
	('e54e5f1e-aa33-4078-aa8b-f9c31e0273e0', 'menus-files', '7042152a-7151-49f1-9bfd-3d8f156e7aef/dish/69d2c84f-3056-4e0b-b130-df33a5d6f18f', '7042152a-7151-49f1-9bfd-3d8f156e7aef', '2023-10-26 17:08:20.635279+00', '2023-10-26 17:08:20.635279+00', '2023-10-26 17:08:20.635279+00', '{"eTag": "\"c02b8704bb3d2d7d05d9065e3cdbff84\"", "size": 41018, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2023-10-26T17:08:20.629Z", "contentLength": 41018, "httpStatusCode": 200}', '250cf931-e3d5-4090-b062-b1334f4820c6') ON CONFLICT (id) DO NOTHING;


