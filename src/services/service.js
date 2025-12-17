import supabase from "../lib/supabase";

export async function tampilPlayer() {
  const { data, error } = await supabase.from("tb_player").select("*");

  if (error) throw error;
  return data;
}

export async function tambahPlayer(player) {
  const { error } = await supabase.from("tb_player").insert(player);

  if (error) throw error;
}

export async function editPlayer(id, fields) {
  const { error } = await supabase
    .from("tb_player")
    .update(fields)
    .eq("id", id)
    .select();

  if (error) throw error;
}

export async function deletePlayer(id) {
  const { error } = await supabase.from("tb_player").delete().eq("id", id);

  if (error) throw error;
}
