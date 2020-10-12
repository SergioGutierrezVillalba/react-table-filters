export default function useFilters() {
  function reverse(elements) {
    return new Sorter({ elements }).reverse();
  }

  function orderByField(elements, field, type) {
    return new Sorter({ elements }).sort(type).byField(field);
  }

  function filterBy(articles, criteria) {
    return new ArticleFilter().use(criteria).filter(articles);
  }

  return { reverse, orderByField, filterBy };
}
