class StateApi {
     constructor(rawData) {
          this.data = {
               articles: this.mapIntoObject(rawData.articles),
               authors: this.mapIntoObject(rawData.authors),
               searchTerm: '',
          }
          this.subscriptions = {};
          this.lastSubscriptionId = 1;
     }

     mapIntoObject(arr) {
          return arr.reduce((acc, curr) => {
               acc[curr.id] = curr;
               return acc;
          }, {});
     }
     lookupAuthor(authorId) {
          return this.data.authors[authorId]
     }
     getState() {
          return this.data;
     }
     setSearchTerm = (searchTerm) => {
          // this.data.searchTerm = searchTerm;
          // this.notifySubscribers();


          this.mergeWithState({ searchTerm });
     }
     subscribe = (cb) => {
          this.subscriptions[this.lastSubscriptionId] = cb;
          this.lastSubscriptionId++;
          return this.lastSubscriptionId;
     }
     unsubscribe = (subscriptionId) => {
          delete this.subscriptions[subscriptionId];

     }

     notifySubscribers = () => {
          Object.values(this.subscriptions).forEach((cb) => cb());
     }

     mergeWithState = (stateChange) => {
          this.data = {
               ...this.data,
               ...stateChange
          }
          this.notifySubscribers();
     }
}
export default StateApi;
