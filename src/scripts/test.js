export default async function getData() {
  const header = {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzZ2V5Z29ianpwbW1scXdrd2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMzU2NzUsImV4cCI6MjAxMDcxMTY3NX0.nyTcfGw7j_ZA_dhqpCHaQviyTl1t6dBPRJ607a9Axjo",
    }
  }
  const response = await fetch('https://usgeygobjzpmmlqwkwhz.supabase.co/rest/v1/', header)
  const data = await response.json()
  return data
}

