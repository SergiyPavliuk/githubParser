class Github{
    constructor(){
        this.client_id = '0e081dd5600694afc23f';
        this.client_secret = 'cc27e5e6e4cfd3c46eef7d60ad7d0a7c93ca6a50';
        this.repos_count = 5;
        this.repos_sort = 'created asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return {
            profile,
            repos
        }
    }
}