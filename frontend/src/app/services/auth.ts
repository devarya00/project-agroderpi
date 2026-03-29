import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
   
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async signIn(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  // Helper to get the current session/token later
  async getSession() {
    const { data, error } = await this.supabase.auth.getSession();
    return data.session;
  }
}