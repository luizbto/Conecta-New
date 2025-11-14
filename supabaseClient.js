// Exemplo: utils/supabaseClient.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'; // Garante que fetch/URL funcionem corretamente no ambiente RN

// ⚠️ SUBSTITUA COM SUAS CHAVES DO SUPABASE ⚠️
// Idealmente, use variáveis de ambiente aqui.
const supabaseUrl = 'https://lrwzxowwdxipjrzapbjc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyd3p4b3d3ZHhpcGpyemFwYmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0NTMxODUsImV4cCI6MjA3NzAyOTE4NX0.50TFQRMFzmxXQSDeUCuJiesSgWJRypAmusp22ctUXhI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Importante para o React Native/Expo
  },
});