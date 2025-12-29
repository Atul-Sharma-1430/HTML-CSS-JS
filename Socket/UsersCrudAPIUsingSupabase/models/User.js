const supabase = require('../Config/db'); // adjust to your file

class User {
  static async create(user) {
    const { data, error } = await supabase.from('users').insert(user).select('*');
    if (error) throw error;
    return data;
  }

  static async findAll() {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;
    return data;
  }

  static async findById(id) {
    const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
  }

  static async findByIdAndUpdate(id, user) {
    const { data, error } = await supabase
      .from('users')
      .update(user)
      .eq('id', id)
      .select('*')
      .single();
    if (error) throw error;
    return data;
  }

  static async findByIdAndDelete(id) {
    const { data, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
      .select('*')
      .single();
    if (error) throw error;
    return data;
  }
}

module.exports = User;
