<?php
namespace App\Services;

use GuzzleHttp\Exception\RequestException;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\UriInterface;
use Spatie\Crawler\CrawlObservers\CrawlObserver as AbstractObserver;

class CrawlObserver extends AbstractObserver{
  /**
    * Called when the crawler will crawl the url.
    *
    * @param \Psr\Http\Message\UriInterface $url
    */
   public function willCrawl(UriInterface $url)
   {
      echo $url;
   }

   /**
    * Called when the crawler has crawled the given url successfully.
    *
    * @param \Psr\Http\Message\UriInterface $url
    * @param \Psr\Http\Message\ResponseInterface $response
    * @param \Psr\Http\Message\UriInterface|null $foundOnUrl
    */
   public function crawled(
       UriInterface $url,
       ResponseInterface $response,
       ?UriInterface $foundOnUrl = null
   ){
      var_dump($response);
   }

   /**
    * Called when the crawler had a problem crawling the given url.
    *
    * @param \Psr\Http\Message\UriInterface $url
    * @param \GuzzleHttp\Exception\RequestException $requestException
    * @param \Psr\Http\Message\UriInterface|null $foundOnUrl
    */
    public function crawlFailed(
       UriInterface $url,
       RequestException $requestException,
       ?UriInterface $foundOnUrl = null
   ){
     var_dump($requestException);

   }

   /**
    * Called when the crawl has ended.
    */
   public function finishedCrawling(): void
   {
   }
}
