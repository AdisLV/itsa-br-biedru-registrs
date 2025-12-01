# PPS – Programmas Prasību Specifikācija  
**Projekts:** ITSA BR – Biedru reģistra sistēma  
**Izstrādātājs:** Adrians Antonovs  
**Datums:** 28.11.2025  


## 1. Sistēmas mērķis  
Šī projekta mērķis ir izveidot vienkāršu tīmekļa lietotni, kas nolasa un attēlo arodbiedrības biedru sarakstu no Supabase datubāzes. Sistēma darbojas kā demonstrācijas piemērs, kā var savienot frontend (HTML, CSS, JavaScript) ar datubāzi Supabase, izmantojot API. Projekts paredzēts kā mācību materiāls un prakses uzdevums, kuru var izmantot ITSA BR (Informācijas tehnoloģiju speciālistu arodbiedrība) biedru reģistra sākotnējai digitālajai versijai.


## 2. Sistēmas galvenie lietotāji  
| Lietotājs | Apraksts |
|-----------|-----------|
| Prakses students | Izstrādā un testē sistēmu, pieslēdzas Supabase, veic programmēšanu un dokumentēšanu. |
| Arodbiedrības pārstāvis | Pārskata biedru sarakstu, apskata statusu un datus (šobrīd tikai skatīšanās režīmā). |
| Demonstrācijas lietotājs | Skatās sistēmas darbību un pārbauda, kā dati tiek attēloti no datubāzes. |


## 3. Ko sistēma šobrīd dara  
Šobrīd lietotne nodrošina:
- Savienojumu ar Supabase datubāzi.
- Biedru saraksta nolasīšanu no tabulas `members`.
- Biedru datu (ID, vārds, status) attēlošanu tīmekļa lapā.
- Statisku datu skatīšanu (bez rediģēšanas vai dzēšanas).


## 4. Ko lietotājs var izdarīt šajā versijā  
 Atvērt mājaslapu (GitHub Pages versija)  
 Redzēt biedru sarakstu (ID, vārds, status)  
 Pārlādēt lapu un atkārtoti ielādēt datus no Supabase  
 Nevar pievienot jaunus biedrus  
 Nevar labot vai dzēst ierakstus  
 Nevar meklēt vai filtrēt datus  


## 5. Nākotnes uzlabojumu iespējas  
| Funkcionalitāte | Apraksts |
|------------------|----------|
| Jauna biedra pievienošana | Forma ar vārdu, e-pastu, statusu. |
| Rediģēšana un dzēšana | Iespēja mainīt statusu, aktualizēt datus. |
| Autorizācija | Tikai arodbiedrības pārstāvji var mainīt datus. |
| Filtrs / meklēšana | Ātra biedru atrašana pēc vārda vai statusa. |
| PDF/CSV eksports | Eksportēt biedru sarakstu kā dokumentu. |


## 6. Sistēmas ierobežojumi  
- Nav autorizācijas (visi var skatīties datus).
- Dati publiski pieejami, ja tiek izmantota anonīmā atslēga.
- Nav pieejama mobilā vai responsīvā versija.
- Nav aizsardzības pret nepareiziem datiem vai kļūdām.


## 7. Secinājums  
Sistēma ir vienkāršs demonstrācijas un mācību projekts, kas rāda, kā pieslēgt tīmekļa lietotni Supabase datubāzei un attēlot datus. To var izmantot kā pamatu turpmākai reālās biedru uzskaites sistēmas izstrādei.
