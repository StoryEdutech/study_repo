<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\Crawler;

class CrawlCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crawl:url {url?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Crawl designated url';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $arguments=$this->arguments();
        Crawler::crawl($arguments["url"]);
        return 0;
    }
}
