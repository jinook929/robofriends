export const robots = fetch('http://www.json-generator.com/api/json/get/cgrRrumRnS?indent=2')
  .then(response => response.json());