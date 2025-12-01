const SUPABASE_URL = "https://skpmfzpzanpnkqawvepk.supabase.co";
const SUPABASE_KEY = "sb_secret_4n_x7CpSvNvV_QMLUrK6ow_78c1D6wL";

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
