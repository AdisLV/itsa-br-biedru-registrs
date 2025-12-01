const SUPABASE_URL = "https://skpmfzpzanpnkqawvepk.supabase.co";
const SUPABASE_KEY = "sb_publishable_uxBiT7p2ryRxmkRKmF-rcw_jbPx2fZz";

const database = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadMembers() {
    const { data, error } = await database.from("members").select("*");
    
    if (error) {
        console.error("Datubāzes kļūda:", error);
        return;
    }

    const tableBody = document.getElementById("members-table");
    tableBody.innerHTML = "";

    data.forEach(member => {
        const row = `<tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.status}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

loadMembers();
