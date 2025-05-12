// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://xchqgudtzrocbxjvbnuk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjaHFndWR0enJvY2J4anZibnVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTc3ODksImV4cCI6MjA2MjAzMzc4OX0.Zvpv3ojMbSh0PnI1ICJV7SRzO_dNr5E4PTWfTe9dX60'
)